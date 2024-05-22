---
theme : "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "P2L7 - React Client Side Routing slides"
vertical-separator: xxx
---

<h1> Client Side Routing 📲 </h1>

---

<h2><strong> ✅ Objectives </strong></h2>

- Create a multi-page SPA
- Utilize the most common react-router components to build a SPA: BrowserRouter, Route, Routes, Link, and NavLink
- Use custom hooks like useNavigate and useParams to access the state of the router
- Use the navigate funtion to navigate pages
- Create dynamic routes and use params

---

### 💡 What is client side routing and React router?

<div style="font-size: 0.8em">

"React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native."
[React Router Docs](https://reactrouter.com/docs/en/v6/getting-started/tutorial) {.fragment}

⬇️ {.fragment}

"Client side routing is a type of routing where as the user navigates around the application or website no full page reloads take place, even when the page’s URL changes. Instead, JavaScript is used to update the URL and fetch and display new content" - Will Taylor {.fragment}

</div>

---

### 🗒️ Planning Routes 

<div style="font-size: 0.8em">
Before we do anything, we need to make a plan about what we want.

What URLs do we want our application to have to simulate the feeling of different "pages"?

| Component       | Url                |
| --------------- | ------------------ |
| Home            | / (root route)     |
| About           | /about             |
| ProjectForm     | /projects/new      |
| ProjectEditForm | /projects/:id/edit |
| ProjectDetail   | /projects/:id      |
| ProjectList     | /projects          |

</div>

---

### The Primary React Router Components 

- BrowserRouter

- Routes

- Route

- Link

- NavLink

---

### 1️⃣ BrowserRouter 

<div style="font-size: 0.8em">

<div style="display: flex">

  <div style="width: 30%; text-align: left;">

  <small>

💡 `BrowserRouter` is a wrapper for App to allow conditional rendering based on the URL

❓ Where does it belong? {.fragment}

Since the `App` component is imported and mounted inside the `index.js` file, this is a great place to wrap the component within `BrowserRouter` {.fragment}

</small>

  </div>
  <div class="fragment" style="width: 80%">

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
```

  </div>
</div>


</div>

---

### 2️⃣ Routes Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">

💡 `Routes` is a wrapper component. Looks through all its child Route components and returns the one that matches the current URL (like a switch statement in JavaScript) {.fragment}

❓ Where does it belong? {.fragment}

Consider where most of the applications components are rendered, this is where they will be nested inside the `Routes` component. {.fragment}

Typically this is in the `App` component. Sometimes an extra component will be created designated for just routing. {.fragment}

  </div>
  <div style="width: 65%; font-size: 0.95em" class="fragment">

```js
return (
  <div className={isDarkMode ? "App" : "App light"}>
    <Header 
      isDarkMode={isDarkMode} 
      onToggleDarkMode={onToggleDarkMode} 
    />
    <Routes>
      <Home />
      <About />
      <ProjectsContainer />
    </Routes>
  </div>
);
```

  </div>
</div>



---

#### 3️⃣ Creating routes using the Route Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 35%; font-size: 0.65em; text-align: left;">

💡 `Route` wraps content that should be visible when the designated route is active. {.fragment}

❓ Where does it belong? {.fragment}

Every component nested inside of the `Routes` component will be individually wrapped inside of a `Route` component. {.fragment}

💥 Route will be provided a `path` prop and an `element` prop. {.fragment}

💥 If the current URL matches the path, the Route will render its element. Otherwise, the Route renders null. {.fragment}

  </div>
  <div style="width: 65%; font-size: 0.75em" class="fragment">

```js
// App.js
  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<ProjectsContainer />} />
      </Routes>
    </div>
  );

// ProjectsContainer
return (
    <Routes>
      <Route
        path="new"
        element={<ProjectForm onAddProject={onAddProject} />}
      />
      <Route
        path=":id/edit"
        element={<ProjectEditForm onUpdateProject={onUpdateProject} />}
      />
      <Route
        path=":id"
        element={<ProjectDetail onDeleteProject={onDeleteProject} />}
      />
      <Route
        path=""
        element={
          <ProjectList
            projects={projects}
            onUpdateProject={onUpdateProject}
            onDeleteProject={onDeleteProject}
            onSelectedPhaseChange={onSelectedPhaseChange}
            setSelectedPhase={setSelectedPhase}
            setSearchQuery={setSearchQuery}
          />
        }
      />
    </Routes>
  );
```

  </div>
</div>


---

### 4️⃣ Link Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `Link` creates an anchor tag in your application that will navigate using React Router instead of the browser default {.fragment}

We want to use `Link` for navigation in our application. It will ensure that a page reload does not occur, unlike the use of an anchor tag `<a></a>` {.fragment}

💥 Link will be provided a `to` prop which indicates where the link should navigate to (generates the href) {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      <Link to="/" style={{ borderBottom: "none" }}>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
      </Link>
      <div className="navigation">
        <Link className="button" to="/projects">
          All Projects
        </Link>
        <Link className="button" to="/projects/new">
          Add Project
        </Link>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

---

### 5️⃣ NavLink Component 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `NavLink` is the same as Link with the additional feature that an "active" class will be added when the url matches the value of the 'to' prop {.fragment}

💥 If you're building sidebar navigation with subsections, you may want the active class to apply to multiple links (the main and subsection) {.fragment}

💥 Otherwise, if you want the active class to only apply if the current URL is an exact match to the `NavLink`, then add the `end` prop to the `NavLink` {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
return (
  <header>
    <nav>
      ...
      <div className="navigation">
        <NavLink 
          className="button" 
          to="/projects"
          end
        >
          All Projects
        </NavLink>
        <NavLink 
          className="button" 
          to="/projects/new"
        >
          Add Project
        </NavLink>
        ...
      </div>
    </nav>
  </header>
);
```

  </div>
</div>

---

### 6️⃣ useNavigate Hook 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `useNavigate` is a hook which returns a function which you can use to navigate to a route programatically (by executing Javascript) {.fragment}

💥 It accomplishes what a `<Link>` does, but without user interaction. Often used as a redirect after another process completes. {.fragment}

💥 The navigate function takes a string argument which is the new route, just like the `to` prop of a `<Link>` {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
import { useNavigate } from 'react-router-dom'
...
const navigate = useNavigate()
...
// after sending a PATCH
fetch(`http://localhost:4000/projects/${id}`, configObj)
  .then((resp) => resp.json())
  .then((updatedProj) => {
    onUpdateProject(updatedProj);
    navigate(`/projects/${id}`)
  });
```

  </div>
</div>

---

### 7️⃣ useParams Hook 

<div style="display: flex; font-size: 0.8em">
  <div style="width: 40%; text-align: left; font-size: 0.8em">

💡 `useParams` is a hook which returns an object of key/value pairs of dynamic parameters from the current URL {.fragment}
 
💥 If the current URL is `/projects/3` and it matches a router path `/projects/:id`, useParams will return `{ id: 3 }` {.fragment}

💥 This is very useful if the `id` is not being passed to a component in props, since we can still communicate it through the URL {.fragment}

  </div>
  <div style="width: 60%" class="fragment">

```js
// ProjectsContainer.js
<Routes>
...
      <Route
        path=":id"
        element={<ProjectDetail onDeleteProject={onDeleteProject} />}
      />
...
</Routes>

// ProjectDetail.js
import { useParams } from 'react-router-dom'
...
const { id } = useParams()
useEffect(() => {
    fetch(`http://localhost:4000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
      });
  }, [id]);
```
  </div>
</div>




