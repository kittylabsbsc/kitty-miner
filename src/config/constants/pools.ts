import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [

{
    pastaId: 1,
     tokenName: 'KITTY-BNB',
     earnToken: 'KITTY',
     stakingTokenName: QuoteToken.KITTYWBNB,
     stakingTokenAddress: '0x61cCA94e696981c2Df97bC0e33E4a6583606732A',    //
     contractAddress: {
       97: '',
       56: '0x01EaB776367AF9E3eD6523822fc19b9Ee1C56959',
     },
     poolCategory: PoolCategory.CORE,
     projectLink: 'https://mangofarm.finance/#/',
     harvest: true,
     tokenPerBlock: '4.0',
     sortOrder: 1,
     isFinished: false,
     tokenDecimals: 18,
    },
    {
      pastaId: 2,
       tokenName: 'KITTY-CHS',
       earnToken: 'KITTY',
       stakingTokenName: QuoteToken.KITTYCHS,
       stakingTokenAddress: '0xe02cE23ba2E9426A74069D5E2d6f0043D8D44667',    //
       contractAddress: {
         97: '',
         56: '0x59d81297DD4C9Cd20A11BC0a567360EE05e2EA1e',
       },
       poolCategory: PoolCategory.CORE,
       projectLink: 'https://mangofarm.finance/#/',
       harvest: true,
       tokenPerBlock: '3.0',
       sortOrder: 2,
       isFinished: false,
       tokenDecimals: 18,
      },

{
  pastaId: 3,
   tokenName: 'MANGO-KITTY',
   earnToken: 'KITTY',
   stakingTokenName: QuoteToken.KITTYMANGO,
   stakingTokenAddress: '0xc4b3561619d37Bf1c44e303e480F14f7b9A34C4e',    //
   contractAddress: {
     97: '',
     56: '0x6aB9dF19c6A122F983397a7B388b4934AD1A9C53',
   },
   poolCategory: PoolCategory.CORE,
   projectLink: 'https://mangofarm.finance/#/',
   harvest: true,
   tokenPerBlock: '1.0',
   sortOrder: 3,
   isFinished: false,
   tokenDecimals: 18,
  },
]

export default pools
