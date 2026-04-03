<button
  className="counter"
  onClick={() => setCount((count) => count + 1)}
  aria-label="Increment count" /* Added aria-label for accessibility */
>
  Increment Count: {count} {/* Updated button text for clarity */}
</button>