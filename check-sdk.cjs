const sdk = require('@strikingly/sdk');
console.log('SDK exports:', Object.keys(sdk));
console.log('Has ImageHelper:', !!sdk.ImageHelper);
console.log('Has DataClient:', !!sdk.DataClient);
console.log('Has User:', !!sdk.User);
console.log('Has Auth:', !!sdk.Auth);
console.log('Has API:', !!sdk.API);
