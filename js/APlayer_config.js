const ap = new APlayer({
    container document.getElementById('aplayer'),
    fixed true,
    autoplay false,
    theme '#FADFA3',
    loop 'all',
    order 'list',
    preload 'auto',
    volume 0.5,
    lrcType 3,
    mutex true,
    listFolded false,
	listMaxHeight: 90,
    audio [{
            name '椿',
            artist '沈以诚',
            lrc 'hppt://it-max.cn/music/椿-沈以诚.lrc',
            cover 'hppt://it-max.cn/music/椿-沈以诚.jpg',
            url 'hppt://it-max.cn/music/椿-沈以诚.mp3'
			theme: '#ebd0c2'
            }
        ]
});