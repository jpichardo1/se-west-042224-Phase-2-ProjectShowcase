---
presentation:
  width: 1500
  height: 1000
  controls: false
verticalSeparator: 'xxx'
---


<h2> 🚗 React Roadmap

The goals for Phase 2: </h2>

- Create a static frontend site with components and props (DOM Manipulation)

- Use state and events to make your site dynamic (Event Handling)

- Add side effects and data fetching to communicate with a server (Network Communication)

---

<h1> Components and Props </h1>

---

<h2> ✅ Objectives </h2>

- Discuss the benefits of React over Vanilla JS
- Explain the importance of Components
- Practice writing components
- Define props and how to create them
- Recognize destructured props and how to work with them
- Recognize best practices when writing components and props
- Render multiple components from a list

---

<h2> 💡 React Philosophy </h2>

- Use declarative syntax (JSX)
- Makes it easier to work with the DOM
- Clearer connection between the code we write and what is displayed in the browser
- Use components to break down complex UI into smaller pieces which creates a better separation of concerns
- Easier to maintain

---

<h2> React > Vanilla JS </h2>

Instead of describing how to do something:

```js
const h1 = document.createElement("h1");
h1.id = "main";
h1.className = "blue";
h1.textContent = "Hello!";
```

We can just describe what we want:

```js
const h1 = (
  <h1 id="main" className="blue">
    Hello from JSX!
  </h1>
);
```

---

<h2> ⚙️ Components </h2>

<p>

Components are the building blocks of React. A component is a function that:

- Takes in some raw data (props)
- Returns user interface (JSX)

</p>

```js
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Header = () => {
  return (
    <div>
      <h3>Hello World</h3>
    </div>
  );
};

root.render(<Header />);
```
xxx

<iframe src="https://codesandbox.io/embed/romantic-wilbur-3lzpzh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="romantic-wilbur-3lzpzh"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---

<h2> ⚙️ Component Gotchas </h2>

This is okay:

```js
function Card() {
  return (
    <div id="card1" className="card">
      <h1>hi</h1>
      <p>wassup?</p>
    </div>
  );
}
```

This is NOT okay:

```js
function card() {
  return (
    <h1>hi</h1>
    <p>wassup?</p>
  )
}
```

xxx
  
- Component name needs to be capitalized
- Components can only return one element
  



---

<h2> 🎩 Props! </h2>

When you create components, one way to make them dynamic and reusable is by passing in props. For example, if we wanted to create several cards on our page using a Card component, we could do so like this:

```js
function Card(props) {
  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}

// Inside another component

return (
  <div>
    <Card greeting="hi" subGreeting="hello" />
    <Card greeting="sup" subGreeting="what's up" />
  </div>
);
```
xxx

  <iframe src="https://codesandbox.io/embed/romantic-wilbur-3lzpzh?fontsize=14&hidenavigation=1&theme=dark"
       style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
       title="romantic-wilbur-3lzpzh"
       allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
       sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
     ></iframe>


---

<h2> 🎩 Props Continued </h2>

The props argument in our Card component defines an object that React will pass to our function when it is called, and it will use whatever attributes we add to our JSX component as key-value pairs on that props object.

For example, if we were to add a console.log in the Card component above, we'd end up seeing this object:

```js
function Card(props) {
  console.log(props); // => { greeting: "hi", subGreeting: "hello" }

  return (
    <div id="card1" className="card">
      <h1>{props.greeting}</h1>
      <p>{props.subGreeting}</p>
    </div>
  );
}
```

---

<h2> Wireframes </h2>

<div style="display: flex;">
  <div style="width: 40%">
    <img src="https://res.cloudinary.com/dnocv6uwb/image/upload/v1643721399/wireframe_bfc35e.png">
  </div>

  <div style="font-size: 1.95rem; margin-top: 0.85rem; width: 60%">
    What components could we use to build this app?

  <textarea style="font-size: 2rem; border: 2px solid black; padding: 1rem; width: 90%; background: #333; color: #eee" rows="10" cols="35"></textarea>    
  </div>
</div>


---


## Let's Dive into the code!

- package.json
- node_modules
- public
- src/index.js
- src/App.js

---

### Sneak Peak at where we're going

Feel free to check out the application we'll be building together over the next couple of weeks

<a href="https://phase-2-react-project-showcase.netlify.app/" target="_blank">Project Showcase App</a>