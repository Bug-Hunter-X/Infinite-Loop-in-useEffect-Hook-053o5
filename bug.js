```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, causing an infinite loop
    setCount(count + 1);
  }, []); // Empty dependency array means it runs only once, but it still causes issues in this case

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```