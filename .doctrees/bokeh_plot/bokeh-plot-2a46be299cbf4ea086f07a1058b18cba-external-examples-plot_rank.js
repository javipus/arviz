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
    
      
      
    
      var element = document.getElementById("19b495f0-703a-4ff6-a437-6d27729b7add");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '19b495f0-703a-4ff6-a437-6d27729b7add' but no matching script tag was found.")
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
                    
                  var docs_json = '{"f6bdf6b7-82ea-4758-844f-797bf49ba1fe":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40757","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40798"},"selection_policy":{"id":"40799"}},"id":"40755","type":"ColumnDataSource"},{"attributes":{},"id":"40686","type":"LinearScale"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40705","type":"PolyAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40670","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"40688"}],"center":[{"id":"40691"},{"id":"40695"},{"id":"40748"},{"id":"40754"},{"id":"40760"},{"id":"40766"}],"height":331,"left":[{"id":"40692"}],"output_backend":"webgl","renderers":[{"id":"40746"},{"id":"40752"},{"id":"40758"},{"id":"40764"}],"title":{"id":"40769"},"toolbar":{"id":"40706"},"toolbar_location":null,"width":496,"x_range":{"id":"40646"},"x_scale":{"id":"40684"},"y_range":{"id":"40648"},"y_scale":{"id":"40686"}},"id":"40681","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40668","type":"SaveTool"},{"attributes":{},"id":"40796","type":"Selection"},{"attributes":{},"id":"40797","type":"UnionRenderers"},{"attributes":{"children":[{"id":"40807"},{"id":"40805"}]},"id":"40808","type":"Column"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"40671","type":"PolyAnnotation"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40777"},"selection_policy":{"id":"40778"}},"id":"40715","type":"ColumnDataSource"},{"attributes":{},"id":"40781","type":"Selection"},{"attributes":{},"id":"40782","type":"UnionRenderers"},{"attributes":{},"id":"40772","type":"AllLabels"},{"attributes":{},"id":"40646","type":"DataRange1d"},{"attributes":{},"id":"40773","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"40733"}},"id":"40737","type":"CDSView"},{"attributes":{},"id":"40798","type":"Selection"},{"attributes":{},"id":"40799","type":"UnionRenderers"},{"attributes":{},"id":"40789","type":"AllLabels"},{"attributes":{"source":{"id":"40721"}},"id":"40725","type":"CDSView"},{"attributes":{},"id":"40790","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40717","type":"VBar"},{"attributes":{"source":{"id":"40715"}},"id":"40719","type":"CDSView"},{"attributes":{},"id":"40783","type":"Selection"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"40738","type":"Span"},{"attributes":{},"id":"40784","type":"UnionRenderers"},{"attributes":{},"id":"40665","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40723","type":"VBar"},{"attributes":{"data_source":{"id":"40715"},"glyph":{"id":"40716"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40717"},"view":{"id":"40719"}},"id":"40718","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"40669","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40722","type":"VBar"},{"attributes":{},"id":"40652","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40779"},"selection_policy":{"id":"40780"}},"id":"40721","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"40726","type":"Span"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"40748","type":"Span"},{"attributes":{"data_source":{"id":"40721"},"glyph":{"id":"40722"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40723"},"view":{"id":"40725"}},"id":"40724","type":"GlyphRenderer"},{"attributes":{},"id":"40800","type":"Selection"},{"attributes":{"axis":{"id":"40688"},"ticker":null},"id":"40691","type":"Grid"},{"attributes":{"data_source":{"id":"40727"},"glyph":{"id":"40728"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40729"},"view":{"id":"40731"}},"id":"40730","type":"GlyphRenderer"},{"attributes":{"text":"tau"},"id":"40741","type":"Title"},{"attributes":{"callback":null},"id":"40703","type":"HoverTool"},{"attributes":{"children":[[{"id":"40645"},0,0],[{"id":"40681"},0,1]]},"id":"40805","type":"GridBox"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"40732","type":"Span"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40790"},"major_label_policy":{"id":"40789"},"ticker":{"id":"40767"}},"id":"40692","type":"LinearAxis"},{"attributes":{"below":[{"id":"40654"}],"center":[{"id":"40657"},{"id":"40661"},{"id":"40720"},{"id":"40726"},{"id":"40732"},{"id":"40738"}],"height":331,"left":[{"id":"40658"}],"output_backend":"webgl","renderers":[{"id":"40718"},{"id":"40724"},{"id":"40730"},{"id":"40736"}],"title":{"id":"40741"},"toolbar":{"id":"40672"},"toolbar_location":null,"width":496,"x_range":{"id":"40646"},"x_scale":{"id":"40650"},"y_range":{"id":"40648"},"y_scale":{"id":"40652"}},"id":"40645","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"40801","type":"UnionRenderers"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40793"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40791"},"ticker":{"id":"40689"}},"id":"40688","type":"LinearAxis"},{"attributes":{},"id":"40774","type":"AllLabels"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"40776"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"40774"},"ticker":{"id":"40655"}},"id":"40654","type":"LinearAxis"},{"attributes":{},"id":"40689","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40728","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"40739","type":"FixedTicker"},{"attributes":{"source":{"id":"40727"}},"id":"40731","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40781"},"selection_policy":{"id":"40782"}},"id":"40727","type":"ColumnDataSource"},{"attributes":{"active_multi":null,"tools":[{"id":"40662"},{"id":"40663"},{"id":"40664"},{"id":"40665"},{"id":"40666"},{"id":"40667"},{"id":"40668"},{"id":"40669"}]},"id":"40672","type":"Toolbar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40729","type":"VBar"},{"attributes":{},"id":"40776","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"40692"},"dimension":1,"ticker":null},"id":"40695","type":"Grid"},{"attributes":{"overlay":{"id":"40671"}},"id":"40666","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"40761"},"glyph":{"id":"40762"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40763"},"view":{"id":"40765"}},"id":"40764","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"40769","type":"Title"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40762","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40716","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40734","type":"VBar"},{"attributes":{"overlay":{"id":"40704"}},"id":"40698","type":"BoxZoomTool"},{"attributes":{},"id":"40791","type":"AllLabels"},{"attributes":{"source":{"id":"40755"}},"id":"40759","type":"CDSView"},{"attributes":{},"id":"40697","type":"PanTool"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40783"},"selection_policy":{"id":"40784"}},"id":"40733","type":"ColumnDataSource"},{"attributes":{},"id":"40696","type":"ResetTool"},{"attributes":{},"id":"40667","type":"UndoTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40735","type":"VBar"},{"attributes":{},"id":"40702","type":"SaveTool"},{"attributes":{},"id":"40648","type":"DataRange1d"},{"attributes":{},"id":"40699","type":"WheelZoomTool"},{"attributes":{},"id":"40793","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"40720","type":"Span"},{"attributes":{"overlay":{"id":"40705"}},"id":"40700","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40763","type":"VBar"},{"attributes":{"overlay":{"id":"40670"}},"id":"40664","type":"BoxZoomTool"},{"attributes":{},"id":"40701","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40800"},"selection_policy":{"id":"40801"}},"id":"40761","type":"ColumnDataSource"},{"attributes":{"source":{"id":"40761"}},"id":"40765","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"40696"},{"id":"40697"},{"id":"40698"},{"id":"40699"},{"id":"40700"},{"id":"40701"},{"id":"40702"},{"id":"40703"}]},"id":"40706","type":"Toolbar"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"40766","type":"Span"},{"attributes":{"data_source":{"id":"40749"},"glyph":{"id":"40750"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40751"},"view":{"id":"40753"}},"id":"40752","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"40743"},"glyph":{"id":"40744"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40745"},"view":{"id":"40747"}},"id":"40746","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"40654"},"ticker":null},"id":"40657","type":"Grid"},{"attributes":{},"id":"40655","type":"BasicTicker"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40796"},"selection_policy":{"id":"40797"}},"id":"40749","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40751","type":"VBar"},{"attributes":{},"id":"40777","type":"Selection"},{"attributes":{},"id":"40663","type":"PanTool"},{"attributes":{},"id":"40662","type":"ResetTool"},{"attributes":{},"id":"40778","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"40754","type":"Span"},{"attributes":{"toolbars":[{"id":"40672"},{"id":"40706"}],"tools":[{"id":"40662"},{"id":"40663"},{"id":"40664"},{"id":"40665"},{"id":"40666"},{"id":"40667"},{"id":"40668"},{"id":"40669"},{"id":"40696"},{"id":"40697"},{"id":"40698"},{"id":"40699"},{"id":"40700"},{"id":"40701"},{"id":"40702"},{"id":"40703"}]},"id":"40806","type":"ProxyToolbar"},{"attributes":{"data_source":{"id":"40755"},"glyph":{"id":"40756"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40757"},"view":{"id":"40759"}},"id":"40758","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40750","type":"VBar"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"40760","type":"Span"},{"attributes":{"toolbar":{"id":"40806"},"toolbar_location":"above"},"id":"40807","type":"ToolbarBox"},{"attributes":{"axis":{"id":"40658"},"dimension":1,"ticker":null},"id":"40661","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40744","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40745","type":"VBar"},{"attributes":{"axis_label":"Chain","formatter":{"id":"40773"},"major_label_policy":{"id":"40772"},"ticker":{"id":"40739"}},"id":"40658","type":"LinearAxis"},{"attributes":{"source":{"id":"40743"}},"id":"40747","type":"CDSView"},{"attributes":{"source":{"id":"40749"}},"id":"40753","type":"CDSView"},{"attributes":{},"id":"40794","type":"Selection"},{"attributes":{"data_source":{"id":"40733"},"glyph":{"id":"40734"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"40735"},"view":{"id":"40737"}},"id":"40736","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"40704","type":"BoxAnnotation"},{"attributes":{},"id":"40795","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"40756","type":"VBar"},{"attributes":{},"id":"40650","type":"LinearScale"},{"attributes":{"ticks":[0,1,2,3]},"id":"40767","type":"FixedTicker"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"40794"},"selection_policy":{"id":"40795"}},"id":"40743","type":"ColumnDataSource"},{"attributes":{},"id":"40779","type":"Selection"},{"attributes":{},"id":"40780","type":"UnionRenderers"},{"attributes":{},"id":"40684","type":"LinearScale"}],"root_ids":["40808"]},"title":"Bokeh Application","version":"2.3.1"}}';
                  var render_items = [{"docid":"f6bdf6b7-82ea-4758-844f-797bf49ba1fe","root_ids":["40808"],"roots":{"40808":"19b495f0-703a-4ff6-a437-6d27729b7add"}}];
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