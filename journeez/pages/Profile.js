import { useState } from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

export default function Profile() {

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/api/user`)
  //     .then(response => response.json())
  //     .then(data => setUser(data))
  //     .catch(error => console.error(error));
  // }, []);

  // if (!user) {
  //   return <div>Loading...</div>;
  // }

    const handleDownload = (event) => {
        // add code to download the photo file
      }

  const [blogPost, setBlogPost] = useState('');

  const handleBlogPostChange = (event) => {
    setBlogPost(event.target.value);
  }

  const handleBlogPostSubmit = (event) => {
    event.preventDefault();
    // add code to submit the blog post to your backend server
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">JourneEZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#planner">Planner</Nav.Link>
            <Nav.Link href="#journal">Journal</Nav.Link>
            <Nav.Link onClick={handleDownload}>Download Photo</Nav.Link>
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#budget">Budget</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>Welcome !</h1>
      <Form onSubmit={handleBlogPostSubmit}>
        <Form.Group controlId="blogPost">
          <Form.Label>Blog Post</Form.Label>
          <Form.Control as="textarea" rows={3} value={blogPost} onChange={handleBlogPostChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}