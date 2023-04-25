// pages/api/locations.js
import locations from '../../data/locations.json'
import axiosInstance from './axiosInstance';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(locations)
  } else {
    res.status(405).end()
  }
}
