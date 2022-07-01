# [HOOKs](https://reactjs.org/docs/hooks-intro.html)

- Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
- you can only use hooks in functional components you cant use hooks in class components

```javascript
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

- when the fuctional component runs the hooks must run in the exact same order
- you cannot put a hook inside

  1. if check block
  2. functions
  3. loops
  4. cannot be nested in anything

- they must be at the top level an nothing around them, no blocks no nothing

## useState()

- useState is a Hook. We call it inside a function component to add some local state to it. React will preserve this state between re-renders.
- to use the useState hook we need to call the useState(), adn the thing that we pass in useState is what the default state is. `useState(4)`

- now this "useState(4)" is going to return a array of values, therefore :=> `const arr = useState(4)`

- convention is to destructure them inline . useState always return a array of two values

  1.  first value in this array will be youur state
  2.  2nd value in this array will be a function that will allow us to update that state
      example :=> `const [count , setCount] = useState(4)`

      summary => fist thing is the cuurent statet and the 2nd thing is fuction which will allow us to update the state

- useState returns a pair: the current state value and a function that lets you update it.
- You can call this function from an event handler or somewhere else. It’s similar to this.setState in a class, except it doesn’t merge the old and new state together.
- when you update the state the component rerenders

- Anytime to modifying state Where you are actually using the previous value of state to create the new value.You need to make sure that you use the function version of Setting your state just like you use setting the state in class based component
  `setCount((preCount) => preCount - 1);`

- setState() => the parameter value is only being run one time ` const [count, setCount] = useState(() => { console.log("run function"); return 4; });`
- If you do use an object inside your state that when you update the object you need to make sure you update all the old values as well because they don't get much together automatically and the reason that the automatic merging does not happen

```javascript
const [state, setState] = useState({
  id: 131,
  name: "mikan",
  color: "black",
});
const name = state.name;
const id = state.id;
const color = state.color;
```

````javascript
setState((preState) => {
      return { ...preState, color: "blue" };
    });```
````

- but this is not the way to use statehooks because instead of having multiple state hooks we want to have multiple state hooks

```javascript
const [name, setName] = useState("mikan");
const [id, setId] = useState("103");
const [color, setColor] = useState("black");
```

- now we dont have to worry about our states clashing , cause now we are using different hooks for an object
