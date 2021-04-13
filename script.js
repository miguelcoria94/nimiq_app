Nimiq.load().then(async function () {

    // Configure for Testnet. For Mainnet, use main().
    Nimiq.GenesisConfig.main();

    // Instantiate a config builder.
    const configBuilder = Nimiq.Client.Configuration.builder();

    // Create a client based on your configuration,
    // it will automatically connect to the network.
    const client = configBuilder.instantiateClient();
});