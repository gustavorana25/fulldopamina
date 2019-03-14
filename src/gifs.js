
export const randomGif = ()=>{
    return gifs[Math.floor(Math.random() * gifs.length)];
}

const gifs = [
    "https://i.giphy.com/media/xHMIDAy1qkzNS/giphy.webp","https://i.giphy.com/media/z9NCORz1O3MJO/200.webp","https://i.giphy.com/media/RIhNQOjGa39Ze/giphy.webp","https://i.giphy.com/media/ZiHVfHBpoULkc/200w.webp","https://i.giphy.com/media/4Z3DdOZRTcXPa/200.webp","https://i.giphy.com/media/Z0uKzOZ11xTJm/giphy.webp","https://media2.giphy.com/media/Zcm5DaspYzhTxstkF4/200w.webp?cid=3640f6095c8a9f95425a4838456fd430","https://i.giphy.com/media/Hc8PMCBjo9BXa/200w.webp","https://i.giphy.com/media/diUKszNTUghVe/giphy.webp","https://media3.giphy.com/media/5MDk34NOY6ili/giphy.gif?cid=3640f6095c8aa392584e35516b2f8aa4","https://i.giphy.com/media/l4HodBpDmoMA5p9bG/200w.webp","https://i.giphy.com/media/l0K4m0mzkJDAIdhHW/giphy.webp","https://i.giphy.com/media/8RxCFgu88jUbe/200w.webp","https://i.giphy.com/media/4Yn70mra350is/200.webp","https://media.tenor.com/images/f4c8059e75d21aa301174d4374ec4680/tenor.gif", "https://media.tenor.com/images/f4c8059e75d21aa301174d4374ec4680/tenor.gif", "https://media.tenor.com/images/b2034b756388e63aeecc89dc1705d043/tenor.gif", "https://media.tenor.com/images/9288a0cb4e5ec15683a3c4b2fb053382/tenor.gif", "https://media.tenor.com/images/b44868e8a2e491120d838e1c58f3e9e1/tenor.gif", "https://media.tenor.com/images/c53584cbfa8359bbd0e78bbaacb400ad/tenor.gif", "https://media.tenor.com/images/f91d94b524747a1d32a2c7735901a5c1/tenor.gif", "https://media.tenor.com/images/54a19462ec0f72a97e914772f350a114/tenor.gif", "https://media.tenor.com/images/e76fa91a6845e57c783a697cf631cf0f/tenor.gif", "https://media.tenor.com/images/79bc59044d2817f49087a5a3e04296d0/tenor.gif", "https://media.tenor.com/images/98157d65ff4dc3efc4504866b57b1119/tenor.gif", "https://media.tenor.com/images/6cc7b82c32778ca70a13673cede11d0f/tenor.gif", "https://media.tenor.com/images/e2fdbcd8b7a306b66690f42e4d7697fe/tenor.gif", "https://media.tenor.com/images/45f71147cd1d0caac315e94ed1828770/tenor.gif", "https://media.tenor.com/images/bcc346dd645ef34c5eed0e22fe3196fe/tenor.gif", "https://media.tenor.com/images/863bc4209c792d8d49c47f15a3154060/tenor.gif", "https://media.tenor.com/images/dada4e0a3fa27d65ab183c0fc62e570a/tenor.gif", "https://media.tenor.com/images/0bcf38a5b922878ec8ce9026d829cd30/tenor.gif", "https://media.tenor.com/images/999a02208d51938c7d7496dcf2379920/tenor.gif", "https://media.tenor.com/images/ea049cc07012f243c172688add54f32d/tenor.gif", "https://media.tenor.com/images/0fca7910b4daa5c249333944e08e410e/tenor.gif", "https://media.tenor.com/images/9bfdda991c03470d362c1c80f26f1ff4/tenor.gif", "https://media.tenor.com/images/fbeb18f6d22b7201118db0b414511ec2/tenor.gif", "https://media.tenor.com/images/8109bdb9c04113ad6bc47c2f5c0a02d9/tenor.gif", "https://media.tenor.com/images/a8fb96131ed9bfd56bb9e8adf212b84e/tenor.gif", "https://media.tenor.com/images/fd8ff9a97c558fc5747b2535e99db037/tenor.gif", "https://media.tenor.com/images/14056cf06a3963ad9d4f7e1eb045bf40/tenor.gif", "https://media.tenor.com/images/a4f6bda857838fa1ade88cd673f16509/tenor.gif", "https://media.tenor.com/images/7bc9a25ab58704661f17c7a76130c509/tenor.gif", "https://media.tenor.com/images/a80fafb3666fbb9f2e5ec4291cbfceeb/tenor.gif", "https://media.tenor.com/images/aa37ff519d18dc4b51b8a55fb36e27e7/tenor.gif", "https://media.tenor.com/images/2ae6828b9a50e2c7177979c77e61b8c0/tenor.gif", "https://media.tenor.com/images/24a40a942fc812394d4e3398bb704957/tenor.gif", "https://media.tenor.com/images/8dcbd6365535547e08b33dd08b3b74d8/tenor.gif", "https://media.tenor.com/images/f4ba46192edf95fa17f8d0554c7c2994/tenor.gif", "https://media.tenor.com/images/18328791b56cb8a636407b7e164b2ca7/tenor.gif", "https://media.tenor.com/images/8f41a4774a1714867d1010a53f21cc31/tenor.gif", "https://media.tenor.com/images/3ba27bc928a57977799dbbfd7b7e8860/tenor.gif", "https://media.tenor.com/images/2cb4c1d050b5085198bf5ac1d4d5155d/tenor.gif", "https://media.tenor.com/images/7919b267030f2f12a7a7358f34827f52/tenor.gif", "https://media.tenor.com/images/d7750aca860cf2477ba36d6e1dca148c/tenor.gif", "https://media.tenor.com/images/717713b44cf6207d37ae1dfc07ded27b/tenor.gif", "https://media.tenor.com/images/1ec915eb76dcff7edf9e5c195b70363f/tenor.gif", "https://media.tenor.com/images/4bae6216885dc007f5496d887cdf6966/tenor.gif", "https://media.tenor.com/images/74ae13d932ee69da8fa1a2042c392fc0/tenor.gif", "https://media.tenor.com/images/0bd77253921b88cd18fea076857edf3a/tenor.gif", "https://media.tenor.com/images/8e1596105bbc172e4f23e176909b8f84/tenor.gif", "https://media.tenor.com/images/90b3bd2e4fc1db8405deffff9919dde8/tenor.gif", "https://media.tenor.com/images/4508fed199f21196f43cef0b00b37371/tenor.gif", "https://media.tenor.com/images/474fc3245018a3b5fecbf0e05078e309/tenor.gif", "https://media.tenor.com/images/e8205cdf08bd575e3679172cbd98c320/tenor.gif","https://media.tenor.com/images/930775b89553c555b0da557128ed1034/tenor.gif", "https://media.tenor.com/images/5963de7ea16702d930dc0107f990b1c9/tenor.gif", "https://media.tenor.com/images/79e5ef1cd6ec5ccc89763797ac4cf312/tenor.gif", "https://media.tenor.com/images/27426af55d0e09ae5f3d2f36bae52690/tenor.gif", "https://media.tenor.com/images/10f5454aa89f6dbf39d9257663d6da15/tenor.gif", "https://media.tenor.com/images/df09eed971467ed669fca2231151ad99/tenor.gif", "https://media.tenor.com/images/039b76f457e474fccd92a26f5562393d/tenor.gif", "https://media.tenor.com/images/3816510f07c963285639e3438f64c727/tenor.gif", "https://media.tenor.com/images/ff858a3ac83e143f205e4680fc38d57c/tenor.gif", "https://media.tenor.com/images/4ad987068a9d54980fa52c0fc6e7fafe/tenor.gif", "https://media.tenor.com/images/bcc346dd645ef34c5eed0e22fe3196fe/tenor.gif", "https://media.tenor.com/images/afacae65e4a94fa21bf356e3504b667d/tenor.gif", "https://media.tenor.com/images/ecc67b5a0a4923e106b6bec48e25c712/tenor.gif", "https://media.tenor.com/images/a2c03c58c2a86927613b7347a775da64/tenor.gif", "https://media.tenor.com/images/7a94dd7ccd185c0fc2695f2bb80d2e7d/tenor.gif", "https://media.tenor.com/images/4cd7978f27b21edc5fe417d787e642cb/tenor.gif", "https://media.tenor.com/images/8b906728d6f1f199155e2dd64ec5dc48/tenor.gif", "https://media.tenor.com/images/f86b7f148184310c679c9e685692706a/tenor.gif", "https://media.tenor.com/images/152b66fa9279557f55ae02899ef98b47/tenor.gif", "https://media.tenor.com/images/ab5fa0edfd032537a08715ebee5fb865/tenor.gif", "https://media.tenor.com/images/a68f608e4415f7dd3480169a046866e9/tenor.gif", "https://media.tenor.com/images/228ed1f6d72c0d8a072a1649f2a4c8dc/tenor.gif", "https://media.tenor.com/images/ffc13fce77b6382023968b8518cb0c49/tenor.gif", "https://media.tenor.com/images/faf101a4ebc545e2775c63a3fa5412d5/tenor.gif", "https://media.tenor.com/images/8db9aa8bb46616db02490156bc7b68ae/tenor.gif", "https://media.tenor.com/images/32e438131b328e62f4deee9d8cf917fd/tenor.gif", "https://media.tenor.com/images/45e307aec063b43cca8872a796552230/tenor.gif", "https://media.tenor.com/images/d69b90138238842cbc187bdb21764ff7/tenor.gif", "https://media.tenor.com/images/aa2e6e98631d840a89aa3bb2ae180159/tenor.gif", "https://media.tenor.com/images/62c507532619ea2c23c49d6167c0a388/tenor.gif", "https://media.tenor.com/images/f7682ca613dcdfc9436169530cde7d11/tenor.gif", "https://media.tenor.com/images/baf9f44d698f2aff876dff37dafed35b/tenor.gif", "https://media.tenor.com/images/b85a8fee108ab61af4da16fbcab89709/tenor.gif", "https://media.tenor.com/images/58b9443e0b266563ebbf37550ec35efc/tenor.gif", "https://media.tenor.com/images/359e5c3bc959c3c925e38b2ea3115e90/tenor.gif", "https://media.tenor.com/images/1b1fa0b6962cf6b438cf04eb0160f18f/tenor.gif", "https://media.tenor.com/images/e643701b8766212d14f9c3b4bdb6e38c/tenor.gif", "https://media.tenor.com/images/74126e54d41f4dc60b24c3f2cc70d584/tenor.gif", "https://media.tenor.com/images/94248e245c93f2034fd2fff9df3d96ff/tenor.gif", "https://media.tenor.com/images/818de7877a4cbb614eafb8cf62af27f7/tenor.gif", "https://media.tenor.com/images/23de78179a3cfcb6912bb70bc4b2f902/tenor.gif", "https://media.tenor.com/images/5f777e567bc374ee91eaeea13f0ba491/tenor.gif", "https://media.tenor.com/images/e588a5b3f8d37ab8e29631e43e775a0e/tenor.gif", "https://media.tenor.com/images/27e27841ce06019680c165cba4cdd01b/tenor.gif", "https://media.tenor.com/images/5f9596cab6bb69b9e34f92ef38015a8c/tenor.gif", "https://media.tenor.com/images/7ab4b4ea1f8e992db977edb6db1d88c6/tenor.gif", "https://media.tenor.com/images/23335ad6d79664ec719eabc806a740f5/tenor.gif", "https://media.tenor.com/images/098e4852dfdc41991add5983e9262a92/tenor.gif", "https://media.tenor.com/images/b7aa76b4a9fb5ef1d3cf5ef2bf1f2e6e/tenor.gif", "https://media.tenor.com/images/6afb17492c5b0a711b51afe70e24d3c4/tenor.gif"
]