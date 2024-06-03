const coins = [
    { name: 'Bitcoin', abbr: 'BTC'},
    { name: 'Ethereum', abbr: 'ETH'},
    { name: 'Notcoin', abbr: 'NOT'},
    { name: 'Toncoin', abbr: 'TON'},
    { name: 'Dogecoin', abbr: 'DOGE'},
    { name: 'Solana', abbr: 'SOL'}
]

const random: number = Math.floor(Math.random() * (coins.length - 1));
export const randomCoin: {name: string, abbr: string} = coins[random];