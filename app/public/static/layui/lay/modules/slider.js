/** layui-v2.5.5 MIT License By https://www.layui.com */
layui.define('jquery', function(e) {
  'use strict'; var i = layui.jquery,
    t = { config: {}, index: layui.slider ? layui.slider.index + 1e4 : 0, set(e) { const t = this; return t.config = i.extend({}, t.config, e), t; }, on(e, i) { return layui.onevent.call(this, n, e, i); } },
    a = function() {
      const e = this,
        i = e.config; return { setValue(i, t) { return e.slide('set', i, t || 0); }, config: i };
    },
    n = 'slider',
    l = 'layui-disabled',
    s = 'layui-slider',
    r = 'layui-slider-bar',
    o = 'layui-slider-wrap',
    u = 'layui-slider-wrap-btn',
    d = 'layui-slider-tips',
    v = 'layui-slider-input',
    c = 'layui-slider-input-txt',
    m = 'layui-slider-input-btn',
    p = 'layui-slider-hover',
    f = function(e) { const a = this; a.index = ++t.index, a.config = i.extend({}, a.config, t.config, e), a.render(); }; f.prototype.config = { type: 'default', min: 0, max: 100, value: 0, step: 1, showstep: !1, tips: !0, input: !1, range: !1, height: 200, disabled: !1, theme: '#009688' }, f.prototype.render = function() {
    const e = this,
      t = e.config; if (t.step < 1 && (t.step = 1), t.max < t.min && (t.max = t.min + t.step), t.range) {
      t.value = typeof t.value === 'object' ? t.value : [ t.min, t.value ]; const a = Math.min(t.value[0], t.value[1]),
        n = Math.max(t.value[0], t.value[1]); t.value[0] = a > t.min ? a : t.min, t.value[1] = n > t.min ? n : t.min, t.value[0] = t.value[0] > t.max ? t.max : t.value[0], t.value[1] = t.value[1] > t.max ? t.max : t.value[1]; var r = Math.floor((t.value[0] - t.min) / (t.max - t.min) * 100),
        v = Math.floor((t.value[1] - t.min) / (t.max - t.min) * 100),
        m = v - r + '%'; r += '%', v += '%';
    } else { typeof t.value === 'object' && (t.value = Math.min.apply(null, t.value)), t.value < t.min && (t.value = t.min), t.value > t.max && (t.value = t.max); var m = Math.floor((t.value - t.min) / (t.max - t.min) * 100) + '%'; } const p = t.disabled ? '#c2c2c2' : t.theme,
      f = '<div class="layui-slider ' + (t.type === 'vertical' ? 'layui-slider-vertical' : '') + '">' + (t.tips ? '<div class="layui-slider-tips"></div>' : '') + '<div class="layui-slider-bar" style="background:' + p + '; ' + (t.type === 'vertical' ? 'height' : 'width') + ':' + m + ';' + (t.type === 'vertical' ? 'bottom' : 'left') + ':' + (r || 0) + ';"></div><div class="layui-slider-wrap" style="' + (t.type === 'vertical' ? 'bottom' : 'left') + ':' + (r || m) + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + p + ';"></div></div>' + (t.range ? '<div class="layui-slider-wrap" style="' + (t.type === 'vertical' ? 'bottom' : 'left') + ':' + v + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + p + ';"></div></div>' : '') + '</div>',
      h = i(t.elem),
      y = h.next('.' + s); if (y[0] && y.remove(), e.elemTemp = i(f), t.range ? (e.elemTemp.find('.' + o).eq(0).data('value', t.value[0]), e.elemTemp.find('.' + o).eq(1).data('value', t.value[1])) : e.elemTemp.find('.' + o).data('value', t.value), h.html(e.elemTemp), t.type === 'vertical' && e.elemTemp.height(t.height + 'px'), t.showstep) { for (var g = (t.max - t.min) / t.step, b = '', x = 1; x < g + 1; x++) { const T = 100 * x / g; T < 100 && (b += '<div class="layui-slider-step" style="' + (t.type === 'vertical' ? 'bottom' : 'left') + ':' + T + '%"></div>'); }e.elemTemp.append(b); } if (t.input && !t.range) { const w = i('<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'); h.css('position', 'relative'), h.append(w), h.find('.' + c).children('input').val(t.value), t.type === 'vertical' ? w.css({ left: 0, top: -48 }) : e.elemTemp.css('margin-right', w.outerWidth() + 15); }t.disabled ? (e.elemTemp.addClass(l), e.elemTemp.find('.' + u).addClass(l)) : e.slide(), e.elemTemp.find('.' + u).on('mouseover', function() {
      const a = t.type === 'vertical' ? t.height : e.elemTemp[0].offsetWidth,
        n = e.elemTemp.find('.' + o),
        l = t.type === 'vertical' ? a - i(this).parent()[0].offsetTop - n.height() : i(this).parent()[0].offsetLeft,
        s = l / a * 100,
        r = i(this).parent().data('value'),
        u = t.setTips ? t.setTips(r) : r; e.elemTemp.find('.' + d).html(u), t.type === 'vertical' ? e.elemTemp.find('.' + d).css({ bottom: s + '%', 'margin-bottom': '20px', display: 'inline-block' }) : e.elemTemp.find('.' + d).css({ left: s + '%', display: 'inline-block' });
    }).on('mouseout', function() { e.elemTemp.find('.' + d).css('display', 'none'); });
  }, f.prototype.slide = function(e, t, a) {
    var n = this,
      l = n.config,
      s = n.elemTemp,
      f = function() { return l.type === 'vertical' ? l.height : s[0].offsetWidth; },
      h = s.find('.' + o),
      y = s.next('.' + v),
      g = y.children('.' + c).children('input').val(),
      b = 100 / ((l.max - l.min) / Math.ceil(l.step)),
      x = function(e, i) {
        e = Math.ceil(e) * b > 100 ? Math.ceil(e) * b : Math.round(e) * b, e = e > 100 ? 100 : e, h.eq(i).css(l.type === 'vertical' ? 'bottom' : 'left', e + '%'); let t = T(h[0].offsetLeft),
          a = l.range ? T(h[1].offsetLeft) : 0; l.type === 'vertical' ? (s.find('.' + d).css({ bottom: e + '%', 'margin-bottom': '20px' }), t = T(f() - h[0].offsetTop - h.height()), a = l.range ? T(f() - h[1].offsetTop - h.height()) : 0) : s.find('.' + d).css('left', e + '%'), t = t > 100 ? 100 : t, a = a > 100 ? 100 : a; const n = Math.min(t, a),
          o = Math.abs(t - a); l.type === 'vertical' ? s.find('.' + r).css({ height: o + '%', bottom: n + '%' }) : s.find('.' + r).css({ width: o + '%', left: n + '%' }); let u = l.min + Math.round((l.max - l.min) * e / 100); if (g = u, y.children('.' + c).children('input').val(g), h.eq(i).data('value', u), u = l.setTips ? l.setTips(u) : u, s.find('.' + d).html(u), l.range) { var v = [ h.eq(0).data('value'), h.eq(1).data('value') ]; v[0] > v[1] && v.reverse(); }l.change && l.change(l.range ? v : u);
      },
      T = function(e) {
        let i = e / f() * 100 / b,
          t = Math.round(i) * b; return e == f() && (t = Math.ceil(i) * b), t;
      },
      w = i([ '<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div' ].join('')),
      M = function(e, t) { const a = function() { t && t(), w.remove(); }; i('#LAY-slider-moving')[0] || i('body').append(w), w.on('mousemove', e), w.on('mouseup', a).on('mouseleave', a); }; if (e === 'set') return x(t, a); s.find('.' + u).each(function(e) {
      const t = i(this); t.on('mousedown', function(i) {
        i = i || window.event; let a = t.parent()[0].offsetLeft,
          n = i.clientX; l.type === 'vertical' && (a = f() - t.parent()[0].offsetTop - h.height(), n = i.clientY); const r = function(i) { i = i || window.event; let r = a + (l.type === 'vertical' ? n - i.clientY : i.clientX - n); r < 0 && (r = 0), r > f() && (r = f()); const o = r / f() * 100 / b; x(o, e), t.addClass(p), s.find('.' + d).show(), i.preventDefault(); },
          o = function() { t.removeClass(p), s.find('.' + d).hide(); }; M(r, o);
      });
    }), s.on('click', function(e) {
      const t = i('.' + u); if (!t.is(event.target) && t.has(event.target).length === 0 && t.length) {
        let a,
          n = l.type === 'vertical' ? f() - e.clientY + i(this).offset().top : e.clientX - i(this).offset().left; n < 0 && (n = 0), n > f() && (n = f()); const s = n / f() * 100 / b; a = l.range ? l.type === 'vertical' ? Math.abs(n - parseInt(i(h[0]).css('bottom'))) > Math.abs(n - parseInt(i(h[1]).css('bottom'))) ? 1 : 0 : Math.abs(n - h[0].offsetLeft) > Math.abs(n - h[1].offsetLeft) ? 1 : 0 : 0, x(s, a), e.preventDefault();
      }
    }), y.hover(function() { const e = i(this); e.children('.' + m).fadeIn('fast'); }, function() { const e = i(this); e.children('.' + m).fadeOut('fast'); }), y.children('.' + m).children('i').each(function(e) { i(this).on('click', function() { g = e == 1 ? g - l.step < l.min ? l.min : Number(g) - l.step : Number(g) + l.step > l.max ? l.max : Number(g) + l.step; const i = (g - l.min) / (l.max - l.min) * 100 / b; x(i, 0); }); }); const q = function() { let e = this.value; e = isNaN(e) ? 0 : e, e = e < l.min ? l.min : e, e = e > l.max ? l.max : e, this.value = e; const i = (e - l.min) / (l.max - l.min) * 100 / b; x(i, 0); }; y.children('.' + c).children('input').on('keydown', function(e) { e.keyCode === 13 && (e.preventDefault(), q.call(this)); })
      .on('change', q);
  }, f.prototype.events = function() { const e = this; e.config; }, t.render = function(e) { const i = new f(e); return a.call(i); }, e(n, t);
});
