"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseProjects = () => {
  const { data: projects, isLoading: loading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      try {
        const { data } = await axios.get('/project.json');
        console.log(data);
        return data;
       
      } catch (error) {
        console.error("Error fetching projects:", error);
        throw new Error("Failed to fetch projects");
      }
    }
  });

  return {projects, loading };
};

export default UseProjects;
