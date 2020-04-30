const ap = new APlayer({
    container document.getElementById('aplayer'),
    fixed true,
    autoplay false,
    theme '#b7daff',
    loop 'all',
    order 'list',
    preload 'auto',
    volume 0.5,
    lrcType 3,
    mutex true,
    listFolded false,

    audio [{
            name '椿',
            artist '沈以诚',
            lrc 'hppt://it-max.cn/music/椿-沈以诚.lrc',
            cover 'hppt://it-max.cn/music/椿-沈以诚.jpg',
            url 'hppt://it-max.cn/music/椿-沈以诚.mp3'
                  }
        ]
});