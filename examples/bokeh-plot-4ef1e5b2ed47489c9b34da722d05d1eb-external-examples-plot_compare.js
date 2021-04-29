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
    
      
      
    
      var element = document.getElementById("4a73254b-e81d-4601-8f33-9a305c2deebc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4a73254b-e81d-4601-8f33-9a305c2deebc' but no matching script tag was found.")
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
                    
                  var docs_json = '{"efbd19c6-f225-4b50-9c9e-140c7d90d97f":{"defs":[],"roots":{"references":[{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15004","type":"MultiLine"},{"attributes":{"overlay":{"id":"14985"}},"id":"14980","type":"LassoSelectTool"},{"attributes":{},"id":"15023","type":"Title"},{"attributes":{},"id":"14964","type":"LinearScale"},{"attributes":{},"id":"15029","type":"BasicTickFormatter"},{"attributes":{},"id":"15031","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"14962","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14999","type":"Scatter"},{"attributes":{},"id":"14979","type":"WheelZoomTool"},{"attributes":{},"id":"14960","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"14984","type":"BoxAnnotation"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"15022","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15009","type":"Circle"},{"attributes":{},"id":"15038","type":"Selection"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"15036"},"selection_policy":{"id":"15037"}},"id":"15012","type":"ColumnDataSource"},{"attributes":{},"id":"15039","type":"UnionRenderers"},{"attributes":{},"id":"14966","type":"LinearScale"},{"attributes":{},"id":"14976","type":"ResetTool"},{"attributes":{"formatter":{"id":"15026"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"15025"},"ticker":{"id":"14995"}},"id":"14972","type":"LinearAxis"},{"attributes":{"data_source":{"id":"14997"},"glyph":{"id":"14998"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"14999"},"view":{"id":"15001"}},"id":"15000","type":"GlyphRenderer"},{"attributes":{},"id":"15027","type":"AllLabels"},{"attributes":{},"id":"15037","type":"UnionRenderers"},{"attributes":{},"id":"15035","type":"UnionRenderers"},{"attributes":{"axis":{"id":"14972"},"dimension":1,"ticker":null},"id":"14975","type":"Grid"},{"attributes":{"source":{"id":"14997"}},"id":"15001","type":"CDSView"},{"attributes":{"children":[[{"id":"14959"},0,0]]},"id":"15043","type":"GridBox"},{"attributes":{},"id":"15025","type":"AllLabels"},{"attributes":{},"id":"15030","type":"Selection"},{"attributes":{"toolbar":{"id":"15044"},"toolbar_location":"above"},"id":"15045","type":"ToolbarBox"},{"attributes":{},"id":"15026","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"14968"},"ticker":null},"id":"14971","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15034"},"selection_policy":{"id":"15035"}},"id":"15007","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"14976"},{"id":"14977"},{"id":"14978"},{"id":"14979"},{"id":"14980"},{"id":"14981"},{"id":"14982"},{"id":"14983"}]},"id":"14986","type":"Toolbar"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15013","type":"MultiLine"},{"attributes":{},"id":"14981","type":"UndoTool"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"14998","type":"Scatter"},{"attributes":{"data_source":{"id":"15017"},"glyph":{"id":"15018"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15019"},"view":{"id":"15021"}},"id":"15020","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15012"},"glyph":{"id":"15013"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15014"},"view":{"id":"15016"}},"id":"15015","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"15007"},"glyph":{"id":"15008"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15009"},"view":{"id":"15011"}},"id":"15010","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15014","type":"MultiLine"},{"attributes":{},"id":"14977","type":"PanTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"15038"},"selection_policy":{"id":"15039"}},"id":"15017","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"14983","type":"HoverTool"},{"attributes":{"children":[{"id":"15045"},{"id":"15043"}]},"id":"15046","type":"Column"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15019","type":"Circle"},{"attributes":{},"id":"15036","type":"Selection"},{"attributes":{"source":{"id":"15017"}},"id":"15021","type":"CDSView"},{"attributes":{"toolbars":[{"id":"14986"}],"tools":[{"id":"14976"},{"id":"14977"},{"id":"14978"},{"id":"14979"},{"id":"14980"},{"id":"14981"},{"id":"14982"},{"id":"14983"}]},"id":"15044","type":"ProxyToolbar"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"15032"},"selection_policy":{"id":"15033"}},"id":"15002","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"15003","type":"MultiLine"},{"attributes":{},"id":"15033","type":"UnionRenderers"},{"attributes":{},"id":"14982","type":"SaveTool"},{"attributes":{"source":{"id":"15002"}},"id":"15006","type":"CDSView"},{"attributes":{"axis_label":"Log","formatter":{"id":"15029"},"major_label_policy":{"id":"15027"},"ticker":{"id":"14969"}},"id":"14968","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"14985","type":"PolyAnnotation"},{"attributes":{"source":{"id":"15007"}},"id":"15011","type":"CDSView"},{"attributes":{},"id":"15034","type":"Selection"},{"attributes":{"below":[{"id":"14968"}],"center":[{"id":"14971"},{"id":"14975"}],"height":500,"left":[{"id":"14972"}],"output_backend":"webgl","renderers":[{"id":"15000"},{"id":"15005"},{"id":"15010"},{"id":"15015"},{"id":"15020"},{"id":"15022"}],"title":{"id":"15023"},"toolbar":{"id":"14986"},"toolbar_location":null,"width":500,"x_range":{"id":"14960"},"x_scale":{"id":"14964"},"y_range":{"id":"14962"},"y_scale":{"id":"14966"}},"id":"14959","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"14984"}},"id":"14978","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15018","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"15030"},"selection_policy":{"id":"15031"}},"id":"14997","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"15002"},"glyph":{"id":"15003"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"15004"},"view":{"id":"15006"}},"id":"15005","type":"GlyphRenderer"},{"attributes":{},"id":"15032","type":"Selection"},{"attributes":{"source":{"id":"15012"}},"id":"15016","type":"CDSView"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"14995","type":"FixedTicker"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"15008","type":"Circle"},{"attributes":{},"id":"14969","type":"BasicTicker"}],"root_ids":["15046"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"efbd19c6-f225-4b50-9c9e-140c7d90d97f","root_ids":["15046"],"roots":{"15046":"4a73254b-e81d-4601-8f33-9a305c2deebc"}}];
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