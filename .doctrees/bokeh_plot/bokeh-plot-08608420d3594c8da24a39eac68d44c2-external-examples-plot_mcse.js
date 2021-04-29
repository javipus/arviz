(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("848ce111-d48c-401a-95d8-e4a09efc5cf1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '848ce111-d48c-401a-95d8-e4a09efc5cf1' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js": "YF85VygJKMVnHE+lLv2AM93Vbstr0yo2TbIu5v8se5Rq3UQAUmcuh4aaJwNlpKwa", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js": "KKuas3gevv3PvrlkyCMzffFeaMq5we/a2QsP5AUoS3mJ0jmaCL7jirFJN3GoE/lM", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js": "MK/uFc3YT18pkvvXRl66tTHjP0/dxoSH2e/eiNMFIguKlun2+WVqaPTWmUy/zvh4"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"d781d12e-3aa1-4289-b324-da585689b094":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"35470","type":"HoverTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35497","type":"Circle"},{"attributes":{},"id":"35469","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35483","type":"Circle"},{"attributes":{"overlay":{"id":"35472"}},"id":"35467","type":"LassoSelectTool"},{"attributes":{},"id":"35424","type":"BasicTicker"},{"attributes":{},"id":"35511","type":"AllLabels"},{"attributes":{},"id":"35468","type":"UndoTool"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"35488","type":"Span"},{"attributes":{},"id":"35447","type":"DataRange1d"},{"attributes":{"end":1,"start":-0.05},"id":"35413","type":"DataRange1d"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"35502","type":"Span"},{"attributes":{},"id":"35513","type":"BasicTickFormatter"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35519"},"selection_policy":{"id":"35520"}},"id":"35491","type":"ColumnDataSource"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"35533"},"selection_policy":{"id":"35534"}},"id":"35505","type":"ColumnDataSource"},{"attributes":{},"id":"35531","type":"Selection"},{"attributes":{},"id":"35532","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"35434","type":"HoverTool"},{"attributes":{"data_source":{"id":"35496"},"glyph":{"id":"35497"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35498"},"view":{"id":"35500"}},"id":"35499","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"35435"}},"id":"35429","type":"BoxZoomTool"},{"attributes":{},"id":"35433","type":"SaveTool"},{"attributes":{},"id":"35430","type":"WheelZoomTool"},{"attributes":{},"id":"35428","type":"PanTool"},{"attributes":{"overlay":{"id":"35436"}},"id":"35431","type":"LassoSelectTool"},{"attributes":{"text":"mu"},"id":"35508","type":"Title"},{"attributes":{},"id":"35432","type":"UndoTool"},{"attributes":{"data_source":{"id":"35505"},"glyph":{"id":"35504"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35507"}},"id":"35506","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"35501","type":"Span"},{"attributes":{"source":{"id":"35496"}},"id":"35500","type":"CDSView"},{"attributes":{"text":"tau"},"id":"35494","type":"Title"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35531"},"selection_policy":{"id":"35532"}},"id":"35496","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35471","type":"BoxAnnotation"},{"attributes":{"toolbars":[{"id":"35437"},{"id":"35473"}],"tools":[{"id":"35427"},{"id":"35428"},{"id":"35429"},{"id":"35430"},{"id":"35431"},{"id":"35432"},{"id":"35433"},{"id":"35434"},{"id":"35463"},{"id":"35464"},{"id":"35465"},{"id":"35466"},{"id":"35467"},{"id":"35468"},{"id":"35469"},{"id":"35470"}]},"id":"35539","type":"ProxyToolbar"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35489","type":"Span"},{"attributes":{},"id":"35533","type":"Selection"},{"attributes":{},"id":"35534","type":"UnionRenderers"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35490","type":"Scatter"},{"attributes":{"data_source":{"id":"35482"},"glyph":{"id":"35483"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"35484"},"view":{"id":"35486"}},"id":"35485","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"35491"},"glyph":{"id":"35490"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"35493"}},"id":"35492","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35472","type":"PolyAnnotation"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"35487","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"35435","type":"BoxAnnotation"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35516"},"major_label_policy":{"id":"35514"},"ticker":{"id":"35420"}},"id":"35419","type":"LinearAxis"},{"attributes":{"source":{"id":"35491"}},"id":"35493","type":"CDSView"},{"attributes":{},"id":"35514","type":"AllLabels"},{"attributes":{},"id":"35463","type":"ResetTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"35436","type":"PolyAnnotation"},{"attributes":{},"id":"35516","type":"BasicTickFormatter"},{"attributes":{},"id":"35525","type":"AllLabels"},{"attributes":{},"id":"35427","type":"ResetTool"},{"attributes":{},"id":"35527","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"35471"}},"id":"35465","type":"BoxZoomTool"},{"attributes":{},"id":"35517","type":"Selection"},{"attributes":{},"id":"35518","type":"UnionRenderers"},{"attributes":{"axis":{"id":"35419"},"ticker":null},"id":"35422","type":"Grid"},{"attributes":{"active_multi":null,"tools":[{"id":"35463"},{"id":"35464"},{"id":"35465"},{"id":"35466"},{"id":"35467"},{"id":"35468"},{"id":"35469"},{"id":"35470"}]},"id":"35473","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35498","type":"Circle"},{"attributes":{},"id":"35415","type":"LinearScale"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"35503","type":"Span"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"35504","type":"Scatter"},{"attributes":{"source":{"id":"35505"}},"id":"35507","type":"CDSView"},{"attributes":{"children":[{"id":"35540"},{"id":"35538"}]},"id":"35541","type":"Column"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"35517"},"selection_policy":{"id":"35518"}},"id":"35482","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"35539"},"toolbar_location":"above"},"id":"35540","type":"ToolbarBox"},{"attributes":{"active_multi":null,"tools":[{"id":"35427"},{"id":"35428"},{"id":"35429"},{"id":"35430"},{"id":"35431"},{"id":"35432"},{"id":"35433"},{"id":"35434"}]},"id":"35437","type":"Toolbar"},{"attributes":{},"id":"35417","type":"LinearScale"},{"attributes":{"below":[{"id":"35455"}],"center":[{"id":"35458"},{"id":"35462"}],"height":500,"left":[{"id":"35459"}],"output_backend":"webgl","renderers":[{"id":"35499"},{"id":"35501"},{"id":"35502"},{"id":"35503"},{"id":"35506"}],"title":{"id":"35508"},"toolbar":{"id":"35473"},"toolbar_location":null,"width":500,"x_range":{"id":"35447"},"x_scale":{"id":"35451"},"y_range":{"id":"35449"},"y_scale":{"id":"35453"}},"id":"35446","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"35519","type":"Selection"},{"attributes":{},"id":"35520","type":"UnionRenderers"},{"attributes":{},"id":"35411","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"35484","type":"Circle"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"35530"},"major_label_policy":{"id":"35528"},"ticker":{"id":"35456"}},"id":"35455","type":"LinearAxis"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35513"},"major_label_policy":{"id":"35511"},"ticker":{"id":"35424"}},"id":"35423","type":"LinearAxis"},{"attributes":{"end":1,"start":-0.05},"id":"35449","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"35527"},"major_label_policy":{"id":"35525"},"ticker":{"id":"35460"}},"id":"35459","type":"LinearAxis"},{"attributes":{},"id":"35451","type":"LinearScale"},{"attributes":{},"id":"35528","type":"AllLabels"},{"attributes":{},"id":"35453","type":"LinearScale"},{"attributes":{},"id":"35466","type":"WheelZoomTool"},{"attributes":{},"id":"35420","type":"BasicTicker"},{"attributes":{},"id":"35456","type":"BasicTicker"},{"attributes":{"children":[[{"id":"35410"},0,0],[{"id":"35446"},0,1]]},"id":"35538","type":"GridBox"},{"attributes":{"axis":{"id":"35455"},"ticker":null},"id":"35458","type":"Grid"},{"attributes":{},"id":"35530","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"35423"},"dimension":1,"ticker":null},"id":"35426","type":"Grid"},{"attributes":{"axis":{"id":"35459"},"dimension":1,"ticker":null},"id":"35462","type":"Grid"},{"attributes":{},"id":"35460","type":"BasicTicker"},{"attributes":{},"id":"35464","type":"PanTool"},{"attributes":{"source":{"id":"35482"}},"id":"35486","type":"CDSView"},{"attributes":{"below":[{"id":"35419"}],"center":[{"id":"35422"},{"id":"35426"}],"height":500,"left":[{"id":"35423"}],"output_backend":"webgl","renderers":[{"id":"35485"},{"id":"35487"},{"id":"35488"},{"id":"35489"},{"id":"35492"}],"title":{"id":"35494"},"toolbar":{"id":"35437"},"toolbar_location":null,"width":500,"x_range":{"id":"35411"},"x_scale":{"id":"35415"},"y_range":{"id":"35413"},"y_scale":{"id":"35417"}},"id":"35410","subtype":"Figure","type":"Plot"}],"root_ids":["35541"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"d781d12e-3aa1-4289-b324-da585689b094","root_ids":["35541"],"roots":{"35541":"848ce111-d48c-401a-95d8-e4a09efc5cf1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();