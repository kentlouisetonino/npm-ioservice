## Description
> - An NPM package that simplies the readline and IO service.

<br />
<br />

## Implementation

```typescript
// Note: This works well in node version 18.
Import IOService from 'npm-ioservice'

(async function() {
  // Create and IO instance.
  const io = IOService.instance();

  // Ask for input.
  // Always await this process.
  const input = await io.question("Value: ");

  // Log the output.
  console.log(input);

  // Exit the io instance.
  io.close();
})();
```

