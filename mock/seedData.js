/*
Fake starting data where I can test UI fast:

sample tasks
sample projects
*/

// 2 - create a variable projects (data) that assigns colors
// to the ids
export const projects = [
  {
    id: "p1",
    name: "SocialBoost Studio",
    color: "#4f46e5"
  },
  {
    id: "p2",
    name: "Mobile App",
    color: "#22c55e"
  },
  {
    id: "p3",
    name: "Cafe Client",
    color: "#f97316"
  },
  {
    id: "p4",
    name: "Barber Shop",
    color: "#ef4444"
  },
  {
    id: "p5",
    name: "SaaS Idea",
    color: "#a855f7"
  }
];

// 1 - create a tasks variable data
const defaultTasks = [
    {
        id: "t1",
        projectId: "p1",

        title: "Landing Page",
        description: "Deploy the completed task",

        status: "doing",
        // "todo" | "doing" | "done"

        priority: "high",
        // "low" | "medium" | "high"

        createdAt: "2026-05-23",
        dueDate: "2026-06-10"
    },
    {
        id: "t2",
        projectId: "p2",

        title: "Mobile App",
        description: "Focus on the landing page",

        status: "todo",

        priority: "medium",

        createdAt: "2026-05-23",
        dueDate: null
    },
    {
        id: "t3",
        projectId: "p3",

        title: "Cafe",
        description: "Show the cafe my refined work for them",

        status: "done",

        priority: "high",

        createdAt: "2026-05-23",
        dueDate: "2026-05-27"
    },
    {
        id: "t4",
        projectId: "p4",

        title: "Barber shop",
        description: "Deployed",

        status: "done",

        priority: "high",

        createdAt: "2026-05-23",
        dueDate: "2026-05-23"
    },
    {
        id: "t5",
        projectId: "p5",

        title: "SaaS",
        description: "Next in line",

        status: "doing",

        priority: "low",

        createdAt: "2026-05-23",
        dueDate: null
    }];

// 2.1 - load saved tasks if they exist
const savedTasks = localStorage.getItem("tasks");

// 2.2 - use saved tasks || fallback to default tasks
export const tasks = savedTasks ? JSON.parse(savedTasks) : defaultTasks;