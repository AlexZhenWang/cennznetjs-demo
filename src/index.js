const {Api} = require('@cennznet/api')

async function main() {
    const api = await Api.create({
        provider: 'wss://cennznet.unfrastructure.io/public/ws'
    });
    
    const balance = await api.query.genericAsset.freeBalance(2, '5EkcN92KaP8QPT2BakFGR7dUhMi2p55knb6vgHvZMfJVzYTL');
    console.log(balance.toString())
}

main();
