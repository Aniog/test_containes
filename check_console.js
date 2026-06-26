const CDP = require('chrome-remote-interface');
(async () => {
  const client = await CDP({port: 9222});
  const { Runtime, Console } = client;
  await Runtime.enable();
  await Console.enable();
  Runtime.on('consoleAdded', e => console.log('LOG:', e.entry.level, e.entry.text));
  Runtime.on('runtimeExceptionOccurred', e => console.log('ERR:', e.exceptionDetails.text, e.exceptionDetails.exception?.description));
  console.log('--- waiting 6s for errors ---');
  await new Promise(r => setTimeout(r, 6000));
  await client.close();
})().catch(e => { console.log('CDP error', e.message); });
