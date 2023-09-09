### [ `Description` ]
> - An NPM package that simplies the readline and IO service. The technologies are
    TypeScript, NodeJS, and NPM.

<br />
<br />
<br />

### [ `Documentation` ]
> - Note, much better to use node version 18.

<br />

> - How to use.
```typescript
Import IOService from 'npm-ioservice'

// Create and IO instance.
const io = IOService.instance();

// Ask for input.
const input = io.question("Value: ");

// Log the output.
console.log(input);

// Exit the io instance.
io.close();
```

