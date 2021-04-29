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
    
      
      
    
      var element = document.getElementById("929d009b-7001-4f5d-a78f-1ba32e4f7615");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '929d009b-7001-4f5d-a78f-1ba32e4f7615' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ffbad25a-0130-4a54-93f9-4b9a23afe774":{"defs":[],"roots":{"references":[{"attributes":{"text":"Centered eight - Non centered eight"},"id":"17293","type":"Title"},{"attributes":{"source":{"id":"17290"}},"id":"17292","type":"CDSView"},{"attributes":{"formatter":{"id":"17301"},"major_label_policy":{"id":"17299"},"ticker":{"id":"17263"}},"id":"17262","type":"LinearAxis"},{"attributes":{},"id":"17302","type":"Selection"},{"attributes":{"overlay":{"id":"17279"}},"id":"17274","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"17278"}},"id":"17272","type":"BoxZoomTool"},{"attributes":{},"id":"17301","type":"BasicTickFormatter"},{"attributes":{},"id":"17296","type":"AllLabels"},{"attributes":{},"id":"17270","type":"ResetTool"},{"attributes":{},"id":"17298","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"17308"},"toolbar_location":"above"},"id":"17309","type":"ToolbarBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17302"},"selection_policy":{"id":"17303"}},"id":"17290","type":"ColumnDataSource"},{"attributes":{},"id":"17254","type":"DataRange1d"},{"attributes":{},"id":"17276","type":"SaveTool"},{"attributes":{"toolbars":[{"id":"17280"}],"tools":[{"id":"17270"},{"id":"17271"},{"id":"17272"},{"id":"17273"},{"id":"17274"},{"id":"17275"},{"id":"17276"},{"id":"17277"}]},"id":"17308","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"17309"},{"id":"17307"}]},"id":"17310","type":"Column"},{"attributes":{},"id":"17275","type":"UndoTool"},{"attributes":{"active_multi":null,"tools":[{"id":"17270"},{"id":"17271"},{"id":"17272"},{"id":"17273"},{"id":"17274"},{"id":"17275"},{"id":"17276"},{"id":"17277"}]},"id":"17280","type":"Toolbar"},{"attributes":{"axis":{"id":"17262"},"ticker":null},"id":"17265","type":"Grid"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"value":"cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17289","type":"Scatter"},{"attributes":{"below":[{"id":"17262"}],"center":[{"id":"17265"},{"id":"17269"}],"height":288,"left":[{"id":"17266"}],"output_backend":"webgl","renderers":[{"id":"17291"}],"title":{"id":"17293"},"toolbar":{"id":"17280"},"toolbar_location":null,"width":432,"x_range":{"id":"17254"},"x_scale":{"id":"17258"},"y_range":{"id":"17256"},"y_scale":{"id":"17260"}},"id":"17253","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17273","type":"WheelZoomTool"},{"attributes":{},"id":"17271","type":"PanTool"},{"attributes":{},"id":"17299","type":"AllLabels"},{"attributes":{},"id":"17260","type":"LinearScale"},{"attributes":{"data_source":{"id":"17290"},"glyph":{"id":"17289"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"17292"}},"id":"17291","type":"GlyphRenderer"},{"attributes":{},"id":"17258","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17279","type":"PolyAnnotation"},{"attributes":{},"id":"17256","type":"DataRange1d"},{"attributes":{},"id":"17303","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17278","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"17266"},"dimension":1,"ticker":null},"id":"17269","type":"Grid"},{"attributes":{},"id":"17267","type":"BasicTicker"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"17298"},"major_label_policy":{"id":"17296"},"ticker":{"id":"17267"}},"id":"17266","type":"LinearAxis"},{"attributes":{"callback":null},"id":"17277","type":"HoverTool"},{"attributes":{"children":[[{"id":"17253"},0,0]]},"id":"17307","type":"GridBox"},{"attributes":{},"id":"17263","type":"BasicTicker"}],"root_ids":["17310"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"ffbad25a-0130-4a54-93f9-4b9a23afe774","root_ids":["17310"],"roots":{"17310":"929d009b-7001-4f5d-a78f-1ba32e4f7615"}}];
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