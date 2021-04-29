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
    
      
      
    
      var element = document.getElementById("9dd94d47-cc37-4ffa-a223-ac99875fdfd9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '9dd94d47-cc37-4ffa-a223-ac99875fdfd9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e056a24f-6934-4b6b-8da2-688e1a6f08bc":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"17701"}},"id":"17705","type":"CDSView"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"17710","type":"Span"},{"attributes":{},"id":"17721","type":"Selection"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17702","type":"Circle"},{"attributes":{"data_source":{"id":"17701"},"glyph":{"id":"17702"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17703"},"view":{"id":"17705"}},"id":"17704","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17690","type":"BoxAnnotation"},{"attributes":{},"id":"17666","type":"DataRange1d"},{"attributes":{"overlay":{"id":"17690"}},"id":"17684","type":"BoxZoomTool"},{"attributes":{"source":{"id":"17707"}},"id":"17709","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"17682"},{"id":"17683"},{"id":"17684"},{"id":"17685"},{"id":"17686"},{"id":"17687"},{"id":"17688"},{"id":"17689"}]},"id":"17692","type":"Toolbar"},{"attributes":{},"id":"17679","type":"BasicTicker"},{"attributes":{"children":[[{"id":"17665"},0,0]]},"id":"17728","type":"GridBox"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17721"},"selection_policy":{"id":"17722"}},"id":"17701","type":"ColumnDataSource"},{"attributes":{},"id":"17668","type":"DataRange1d"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"17717"},"major_label_policy":{"id":"17715"},"ticker":{"id":"17679"}},"id":"17678","type":"LinearAxis"},{"attributes":{},"id":"17720","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"17689","type":"HoverTool"},{"attributes":{},"id":"17722","type":"UnionRenderers"},{"attributes":{"children":[{"id":"17730"},{"id":"17728"}]},"id":"17731","type":"Column"},{"attributes":{"toolbars":[{"id":"17692"}],"tools":[{"id":"17682"},{"id":"17683"},{"id":"17684"},{"id":"17685"},{"id":"17686"},{"id":"17687"},{"id":"17688"},{"id":"17689"}]},"id":"17729","type":"ProxyToolbar"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"17706","type":"Scatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"17720"},"major_label_policy":{"id":"17718"},"ticker":{"id":"17675"}},"id":"17674","type":"LinearAxis"},{"attributes":{},"id":"17718","type":"AllLabels"},{"attributes":{},"id":"17670","type":"LinearScale"},{"attributes":{"axis":{"id":"17678"},"dimension":1,"ticker":null},"id":"17681","type":"Grid"},{"attributes":{"toolbar":{"id":"17729"},"toolbar_location":"above"},"id":"17730","type":"ToolbarBox"},{"attributes":{},"id":"17683","type":"PanTool"},{"attributes":{},"id":"17723","type":"Selection"},{"attributes":{"data_source":{"id":"17707"},"glyph":{"id":"17706"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17709"}},"id":"17708","type":"GlyphRenderer"},{"attributes":{},"id":"17715","type":"AllLabels"},{"attributes":{},"id":"17685","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17703","type":"Circle"},{"attributes":{"overlay":{"id":"17691"}},"id":"17686","type":"LassoSelectTool"},{"attributes":{},"id":"17724","type":"UnionRenderers"},{"attributes":{},"id":"17675","type":"BasicTicker"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"17723"},"selection_policy":{"id":"17724"}},"id":"17707","type":"ColumnDataSource"},{"attributes":{},"id":"17688","type":"SaveTool"},{"attributes":{},"id":"17672","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17691","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"17674"},"ticker":null},"id":"17677","type":"Grid"},{"attributes":{},"id":"17717","type":"BasicTickFormatter"},{"attributes":{"text":"mu"},"id":"17712","type":"Title"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17711","type":"Span"},{"attributes":{"below":[{"id":"17674"}],"center":[{"id":"17677"},{"id":"17681"}],"height":500,"left":[{"id":"17678"}],"output_backend":"webgl","renderers":[{"id":"17704"},{"id":"17708"},{"id":"17710"},{"id":"17711"}],"title":{"id":"17712"},"toolbar":{"id":"17692"},"toolbar_location":null,"width":500,"x_range":{"id":"17666"},"x_scale":{"id":"17670"},"y_range":{"id":"17668"},"y_scale":{"id":"17672"}},"id":"17665","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17682","type":"ResetTool"},{"attributes":{},"id":"17687","type":"UndoTool"}],"root_ids":["17731"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"e056a24f-6934-4b6b-8da2-688e1a6f08bc","root_ids":["17731"],"roots":{"17731":"9dd94d47-cc37-4ffa-a223-ac99875fdfd9"}}];
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