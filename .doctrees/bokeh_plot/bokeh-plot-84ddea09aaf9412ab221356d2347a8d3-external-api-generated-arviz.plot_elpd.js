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
    
      
      
    
      var element = document.getElementById("b2b7c8b7-5b18-467a-a557-47a422636699");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'b2b7c8b7-5b18-467a-a557-47a422636699' but no matching script tag was found.")
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
                    
                  var docs_json = '{"87859e4b-bb2b-46a6-9648-aadae4288284":{"defs":[],"roots":{"references":[{"attributes":{"callback":null},"id":"14198","type":"HoverTool"},{"attributes":{},"id":"14177","type":"DataRange1d"},{"attributes":{"text":"centered model - non centered model"},"id":"14214","type":"Title"},{"attributes":{},"id":"14220","type":"AllLabels"},{"attributes":{"source":{"id":"14211"}},"id":"14213","type":"CDSView"},{"attributes":{},"id":"14196","type":"UndoTool"},{"attributes":{},"id":"14181","type":"LinearScale"},{"attributes":{"overlay":{"id":"14199"}},"id":"14193","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"14230"},{"id":"14228"}]},"id":"14231","type":"Column"},{"attributes":{"toolbar":{"id":"14229"},"toolbar_location":"above"},"id":"14230","type":"ToolbarBox"},{"attributes":{},"id":"14217","type":"AllLabels"},{"attributes":{"overlay":{"id":"14200"}},"id":"14195","type":"LassoSelectTool"},{"attributes":{},"id":"14179","type":"LinearScale"},{"attributes":{"data_source":{"id":"14211"},"glyph":{"id":"14210"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"14213"}},"id":"14212","type":"GlyphRenderer"},{"attributes":{},"id":"14219","type":"BasicTickFormatter"},{"attributes":{},"id":"14192","type":"PanTool"},{"attributes":{},"id":"14184","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14199","type":"BoxAnnotation"},{"attributes":{},"id":"14224","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"14174"},0,0]]},"id":"14228","type":"GridBox"},{"attributes":{},"id":"14191","type":"ResetTool"},{"attributes":{},"id":"14188","type":"BasicTicker"},{"attributes":{"active_multi":null,"tools":[{"id":"14191"},{"id":"14192"},{"id":"14193"},{"id":"14194"},{"id":"14195"},{"id":"14196"},{"id":"14197"},{"id":"14198"}]},"id":"14201","type":"Toolbar"},{"attributes":{},"id":"14175","type":"DataRange1d"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"14223"},"selection_policy":{"id":"14224"}},"id":"14211","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"14201"}],"tools":[{"id":"14191"},{"id":"14192"},{"id":"14193"},{"id":"14194"},{"id":"14195"},{"id":"14196"},{"id":"14197"},{"id":"14198"}]},"id":"14229","type":"ProxyToolbar"},{"attributes":{},"id":"14194","type":"WheelZoomTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"14219"},"major_label_policy":{"id":"14217"},"ticker":{"id":"14188"}},"id":"14187","type":"LinearAxis"},{"attributes":{"axis":{"id":"14183"},"ticker":null},"id":"14186","type":"Grid"},{"attributes":{"axis":{"id":"14187"},"dimension":1,"ticker":null},"id":"14190","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"14210","type":"Scatter"},{"attributes":{},"id":"14222","type":"BasicTickFormatter"},{"attributes":{},"id":"14197","type":"SaveTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14200","type":"PolyAnnotation"},{"attributes":{"below":[{"id":"14183"}],"center":[{"id":"14186"},{"id":"14190"}],"height":288,"left":[{"id":"14187"}],"output_backend":"webgl","renderers":[{"id":"14212"}],"title":{"id":"14214"},"toolbar":{"id":"14201"},"toolbar_location":null,"width":432,"x_range":{"id":"14175"},"x_scale":{"id":"14179"},"y_range":{"id":"14177"},"y_scale":{"id":"14181"}},"id":"14174","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14223","type":"Selection"},{"attributes":{"formatter":{"id":"14222"},"major_label_policy":{"id":"14220"},"ticker":{"id":"14184"}},"id":"14183","type":"LinearAxis"}],"root_ids":["14231"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"87859e4b-bb2b-46a6-9648-aadae4288284","root_ids":["14231"],"roots":{"14231":"b2b7c8b7-5b18-467a-a557-47a422636699"}}];
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