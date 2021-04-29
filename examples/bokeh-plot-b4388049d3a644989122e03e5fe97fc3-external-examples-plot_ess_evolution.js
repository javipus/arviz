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
    
      
      
    
      var element = document.getElementById("02889556-1b6b-4119-9290-7bb332bb0ee3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '02889556-1b6b-4119-9290-7bb332bb0ee3' but no matching script tag was found.")
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
                    
                  var docs_json = '{"31f475a6-c7b4-4a39-98dc-8e47e7857ab5":{"defs":[],"roots":{"references":[{"attributes":{},"id":"17535","type":"UndoTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"17569","type":"Span"},{"attributes":{},"id":"17578","type":"BasicTickFormatter"},{"attributes":{},"id":"17520","type":"LinearScale"},{"attributes":{},"id":"17533","type":"WheelZoomTool"},{"attributes":{},"id":"17586","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17539","type":"PolyAnnotation"},{"attributes":{},"id":"17589","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"17539"}},"id":"17534","type":"LassoSelectTool"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17555","type":"Line"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17588"},"selection_policy":{"id":"17589"}},"id":"17564","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17538"}},"id":"17532","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"17549"},"glyph":{"id":"17550"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17551"},"view":{"id":"17553"}},"id":"17552","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"17564"},"glyph":{"id":"17565"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17566"},"view":{"id":"17568"}},"id":"17567","type":"GlyphRenderer"},{"attributes":{},"id":"17518","type":"LinearScale"},{"attributes":{"source":{"id":"17559"}},"id":"17563","type":"CDSView"},{"attributes":{},"id":"17581","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17538","type":"BoxAnnotation"},{"attributes":{},"id":"17587","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17565","type":"Circle"},{"attributes":{"text":"b"},"id":"17573","type":"Title"},{"attributes":{"toolbar":{"id":"17594"},"toolbar_location":"above"},"id":"17595","type":"ToolbarBox"},{"attributes":{},"id":"17527","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"17556","type":"Line"},{"attributes":{},"id":"17530","type":"ResetTool"},{"attributes":{"source":{"id":"17554"}},"id":"17558","type":"CDSView"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"17552"},{"id":"17557"}]},"id":"17571","type":"LegendItem"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17586"},"selection_policy":{"id":"17587"}},"id":"17559","type":"ColumnDataSource"},{"attributes":{},"id":"17585","type":"UnionRenderers"},{"attributes":{"source":{"id":"17564"}},"id":"17568","type":"CDSView"},{"attributes":{},"id":"17516","type":"DataRange1d"},{"attributes":{},"id":"17583","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"17581"},"major_label_policy":{"id":"17579"},"ticker":{"id":"17523"}},"id":"17522","type":"LinearAxis"},{"attributes":{"click_policy":"hide","items":[{"id":"17571"},{"id":"17572"}],"location":"center_right","orientation":"horizontal"},"id":"17570","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17561","type":"Line"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"17567"},{"id":"17562"}]},"id":"17572","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17551","type":"Circle"},{"attributes":{},"id":"17523","type":"BasicTicker"},{"attributes":{"axis":{"id":"17526"},"dimension":1,"ticker":null},"id":"17529","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17550","type":"Circle"},{"attributes":{"callback":null},"id":"17537","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"17566","type":"Circle"},{"attributes":{},"id":"17582","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17582"},"selection_policy":{"id":"17583"}},"id":"17549","type":"ColumnDataSource"},{"attributes":{},"id":"17588","type":"Selection"},{"attributes":{"toolbars":[{"id":"17540"}],"tools":[{"id":"17530"},{"id":"17531"},{"id":"17532"},{"id":"17533"},{"id":"17534"},{"id":"17535"},{"id":"17536"},{"id":"17537"}]},"id":"17594","type":"ProxyToolbar"},{"attributes":{"children":[{"id":"17595"},{"id":"17593"}]},"id":"17596","type":"Column"},{"attributes":{"above":[{"id":"17570"}],"below":[{"id":"17522"}],"center":[{"id":"17525"},{"id":"17529"}],"height":500,"left":[{"id":"17526"}],"output_backend":"webgl","renderers":[{"id":"17552"},{"id":"17557"},{"id":"17562"},{"id":"17567"},{"id":"17569"}],"title":{"id":"17573"},"toolbar":{"id":"17540"},"toolbar_location":null,"width":500,"x_range":{"id":"17514"},"x_scale":{"id":"17518"},"y_range":{"id":"17516"},"y_scale":{"id":"17520"}},"id":"17513","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"17536","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"17584"},"selection_policy":{"id":"17585"}},"id":"17554","type":"ColumnDataSource"},{"attributes":{"source":{"id":"17549"}},"id":"17553","type":"CDSView"},{"attributes":{},"id":"17514","type":"DataRange1d"},{"attributes":{"children":[[{"id":"17513"},0,0]]},"id":"17593","type":"GridBox"},{"attributes":{"active_multi":null,"tools":[{"id":"17530"},{"id":"17531"},{"id":"17532"},{"id":"17533"},{"id":"17534"},{"id":"17535"},{"id":"17536"},{"id":"17537"}]},"id":"17540","type":"Toolbar"},{"attributes":{"axis":{"id":"17522"},"ticker":null},"id":"17525","type":"Grid"},{"attributes":{},"id":"17576","type":"AllLabels"},{"attributes":{"axis_label":"ESS","formatter":{"id":"17578"},"major_label_policy":{"id":"17576"},"ticker":{"id":"17527"}},"id":"17526","type":"LinearAxis"},{"attributes":{},"id":"17531","type":"PanTool"},{"attributes":{"data_source":{"id":"17554"},"glyph":{"id":"17555"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17556"},"view":{"id":"17558"}},"id":"17557","type":"GlyphRenderer"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"17560","type":"Line"},{"attributes":{},"id":"17579","type":"AllLabels"},{"attributes":{},"id":"17584","type":"Selection"},{"attributes":{"data_source":{"id":"17559"},"glyph":{"id":"17560"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"17561"},"view":{"id":"17563"}},"id":"17562","type":"GlyphRenderer"}],"root_ids":["17596"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"31f475a6-c7b4-4a39-98dc-8e47e7857ab5","root_ids":["17596"],"roots":{"17596":"02889556-1b6b-4119-9290-7bb332bb0ee3"}}];
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