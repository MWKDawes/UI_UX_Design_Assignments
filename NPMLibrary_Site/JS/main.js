

const bouncyCircle = new mojs.Shape({
    parent:       '#bouncyCircle',
    shape:        'circle',
    left:         '75%',
    fill:         {'#F64040': '#FC46AD'},
    radius:       {20: 80},
    duration:     2000,
    isYoyo:       true,
    isShowStart:  true,
    easing:       'elastic.inout',
    repeat:       1,
  });
  
  bouncyCircle.play()
  
const rect = new mojs.Shape({
  shape:        'rect',
  left:         '25%',
  fill:         'none',
  radius:       20,
  stroke:       { 'rgba(0,255,255, 1)' : 'magenta' },
  strokeWidth:  { 10: 0 },
  strokeDasharray: '100%',
  strokeDashoffset: { '-100%' : '100%' },
  rotate:        { 0: 180 },

  duration:     2000,
  repeat:       999,
}).play();

const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

const circle = new mojs.Shape({
  shape:        'rect',
  fill:         { '#F64040' : '#F64040', curve: scaleCurve },
  radius:       10,
  rx:           3,
  x:            { [-125] : 125, easing: shiftCurve },
  scaleX:       { 1 : 1, curve: scaleCurve },
  scaleY:       { 1 : 1, curve: nScaleCurve },
  origin:       { '0 50%' : '100% 50%', easing: shiftCurve },

  isYoyo:         true,
  delay:        500,
  duration:     800,
  repeat:       999
}).play();