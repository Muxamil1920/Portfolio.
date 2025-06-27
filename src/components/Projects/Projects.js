import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Todos from "../../Assets/Projects/Todos.png";
import world from "../../Assets/Projects/world_data.png";
import Movie from "../../Assets/Projects/Movie_ratings.png";
import sales from "../../Assets/Projects/sales.png";
import hospital from "../../Assets/Projects/Hospital.png";
import Mnist from "../../Assets/Projects/Mnist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales_Prediction"
              description="Sales prediction using a supervised machine learning model that estimates revenue based on advertising expenditures across TV, radio, and newspaper channels."
              ghLink="https://github.com/Muxamil1920/Flask-React"
              demoLink="https://flask-react-n7il1tmjc-muxamil1920s-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todos}
              isBlog={false}
              title="Todos APP"
              description="A simple and efficient ToDo application built using FastAPI. This project provides a RESTful API for managing tasks — allowing users to create, read, update, and delete todos with ease. Along with user autorization and authentication for login and register, the website is fully tested with pytest"
              ghLink="https://github.com/Muxamil1920/FastAPI-Project-ToDo-s"
              demoLink="https://fastapi-project-todo-s-4.onrender.com/auth/login-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mnist}
              isBlog={false}
              title="Hand Written Digits"
              description="Identifying handwritten digits using the TensorFlow framework and the MNIST dataset sourced from Kaggle."
              ghLink="https://github.com/Muxamil1920/Deep-Learning/blob/main/MNIST.ipynb"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Fandango"
              description="This is the data behind the story Be Suspicious Of Online Movie Ratings, Especially Fandango’s openly available on 538's github: https://github.com/fivethirtyeight/data. There are two csv files, one with Fandango Stars and Displayed Ratings, and the other with aggregate data for movie ratings from other sites, like Metacritic,IMDB, and Rotten Tomatoes."
              ghLink="https://github.com/Muxamil1920/Data_visualisation/blob/main/Movie_Ratings-Project.ipynb"
              // demoLink="/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="A terminal-based Hospital Management System built using Python Django and MySQL. It allows administrators to manage patient records, doctor details, appointments, and billing efficiently. Designed for educational and demonstration purposes, this project showcases CRUD operations, database connectivity, and backend logic for real-world healthcare management systems"
              ghLink="https://github.com/Muxamil1920/Hospital_Management"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={world}
              isBlog={false}
              title="World Data"
              description="This project explores unsupervised learning to group countries into meaningful clusters based on multiple socio-economic and demographic features. The goal is to understand global patterns and regional similarities using KMeans clustering."
              ghLink="https://github.com/Muxamil1920/Machine-Learning-Models-Unsupervised/blob/main/KMeans-Cluster-world-Data.ipynb"
              // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
