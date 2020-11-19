import React from "react"
import Layout from "../components/layout"
import ProjectList from "../components/project/project-list"

export default function Home() {
  return (
    <Layout>
      <div className="hero">
        <h2>Hello, I'm Marc - a Computer Science student from Germany</h2>
      </div>

      <div>
        <ProjectList />
      </div>
    </Layout>
  )
}
