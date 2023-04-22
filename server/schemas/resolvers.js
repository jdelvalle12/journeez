const { AuthenticationError } = require('apollo-server-express');
const { User, Location, Lodging, Attraction, Eatery } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    locations: async () => {
      return await Location.find();
    },
    lodgings: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Lodging.find(params).populate('location');
    },
    attractions: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Attraction.find(params).populate('location');
    },
    eateries: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
          $options: 'i' // case-insensitive
        };
      }

      return await Eatery.find(params).populate('location');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          populate: 'location'
        });

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // existing mutation resolvers here
    addLodging: async (parent, args, context) => {
      if (context.user) {
        const lodging = await Lodging.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { lodgings: lodging._id } });

        return lodging;
      }

      throw new AuthenticationError('Not logged in');
    },
    addAttraction: async (parent, args, context) => {
      if (context.user) {
        const attraction = await Attraction.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { attractions: attraction._id } });

        return attraction;
      }

      throw new AuthenticationError('Not logged in');
    },
    addEatery: async (parent, args, context) => {
      if (context.user) {
        const eatery = await Eatery.create({ ...args, location: args.locationId });

        await Location.findByIdAndUpdate(args.locationId, { $push: { eateries: eatery._id } });

        return eatery;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateLodging: async (parent, args, context) => {
      if (context.user) {
        return await Lodging.findByIdAndUpdate(args._id, args.input, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateAttraction: async (parent, args, context) => {
      if (context.user) {
        return await Attraction.findByIdAndUpdate(args._id, args.input, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    updateEatery: async (parent, args, context) => {
      if (context.user) {
        return await Eatery.findByIdAndUpdate(args._id, args.input, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteLodging: async (parent, { _id }, context) => {
      if (context.user) {
        const lodging = await Lodging.findByIdAndDelete(_id);

        await Location.findByIdAndUpdate(lodging.location, { $pull: { lodgings: _id } });

        return lodging;
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteAttraction: async (parent, { _id }, context) => {
      if (context.user) {
        const attraction = await Attraction.findByIdAndDelete(_id);

        await Location.findByIdAndUpdate(attraction.location, { $pull: { attractions: _id } });

        return attraction;
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteEatery: async (parent, { _id }, context) => {
      if (context.user) {
        const eatery = await Eatery.findByIdAndDelete(_id);

        await Location.findByIdAndUpdate(eatery.location, { $pull: { eateries: _id } });

        return eatery;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
