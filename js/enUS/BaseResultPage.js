
async function websocketBaseResult(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketBaseResult', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = $('#BaseResultForm :input[name=id]').val();
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
      var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
      var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
      var $header = $('<div>').attr('class', 'w3-container fa- ').attr('id', 'header-' + id);
      var $i = $('<i>').attr('class', 'fa fa- w3-margin-right ').attr('id', 'icon-' + id);
      var $headerSpan = $('<span>').attr('class', '').text('modify  in ' + json.timeRemaining);
      var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
      var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
      var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
      var $progress = $('<div>').attr('class', 'w3- ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = $('.box-' + id);
        if(!$old_box.size()) {
          $('.top-box').append($box);
        } else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
          $('.box-' + id).html($margin);
        }
      } else {
        $('.box-' + id).remove();
      }
      if(pk && pkPage && pk == pkPage) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketBaseResultInner(apiRequest) {
  var id = apiRequest['id'];
  var ids = apiRequest['ids'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(id != null && vars.length > 0) {
    var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    $.get(uri, {}, function(data) {
      var $response = $("<html/>").html(data);
        var inputCreated = null;
        var inputModified = null;
        var inputObjectId = null;
        var inputArchived = null;
        var inputDeleted = null;
        var inputClassSimpleName = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassCanonicalNames = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlId = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;

        if(vars.includes('created'))
          inputCreated = $response.find('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.find('.Page_modified');
        if(vars.includes('objectId'))
          inputObjectId = $response.find('.Page_objectId');
        if(vars.includes('archived'))
          inputArchived = $response.find('.Page_archived');
        if(vars.includes('deleted'))
          inputDeleted = $response.find('.Page_deleted');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.find('.Page_classSimpleName');
        if(vars.includes('sessionId'))
          inputSessionId = $response.find('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.find('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.find('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.find('.Page_objectTitle');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.find('.Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.find('.Page_classCanonicalName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.find('.Page_classCanonicalNames');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.find('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.find('.Page_objectText');
        if(vars.includes('pageUrlId'))
          inputPageUrlId = $response.find('.Page_pageUrlId');
        if(vars.includes('pageUrlPk'))
          inputPageUrlPk = $response.find('.Page_pageUrlPk');
        if(vars.includes('pageUrlApi'))
          inputPageUrlApi = $response.find('.Page_pageUrlApi');
        if(vars.includes('id'))
          inputId = $response.find('.Page_id');
        jsWebsocketBaseResult(id, vars, $response);

        window.baseResult = JSON.parse($response.find('.pageForm .baseResult').val());
        window.listBaseResult = JSON.parse($response.find('.pageForm .listBaseResult').val());


        if(inputCreated) {
          inputCreated.replaceAll('.Page_created');
          addGlow($('.Page_created'));
        }

        if(inputModified) {
          inputModified.replaceAll('.Page_modified');
          addGlow($('.Page_modified'));
        }

        if(inputObjectId) {
          inputObjectId.replaceAll('.Page_objectId');
          addGlow($('.Page_objectId'));
        }

        if(inputArchived) {
          inputArchived.replaceAll('.Page_archived');
          addGlow($('.Page_archived'));
        }

        if(inputDeleted) {
          inputDeleted.replaceAll('.Page_deleted');
          addGlow($('.Page_deleted'));
        }

        if(inputClassSimpleName) {
          inputClassSimpleName.replaceAll('.Page_classSimpleName');
          addGlow($('.Page_classSimpleName'));
        }

        if(inputSessionId) {
          inputSessionId.replaceAll('.Page_sessionId');
          addGlow($('.Page_sessionId'));
        }

        if(inputUserKey) {
          inputUserKey.replaceAll('.Page_userKey');
          addGlow($('.Page_userKey'));
        }

        if(inputSaves) {
          inputSaves.replaceAll('.Page_saves');
          addGlow($('.Page_saves'));
        }

        if(inputObjectTitle) {
          inputObjectTitle.replaceAll('.Page_objectTitle');
          addGlow($('.Page_objectTitle'));
        }

        if(inputInheritPk) {
          inputInheritPk.replaceAll('.Page_inheritPk');
          addGlow($('.Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          inputClassCanonicalName.replaceAll('.Page_classCanonicalName');
          addGlow($('.Page_classCanonicalName'));
        }

        if(inputClassCanonicalNames) {
          inputClassCanonicalNames.replaceAll('.Page_classCanonicalNames');
          addGlow($('.Page_classCanonicalNames'));
        }

        if(inputObjectSuggest) {
          inputObjectSuggest.replaceAll('.Page_objectSuggest');
          addGlow($('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          inputObjectText.replaceAll('.Page_objectText');
          addGlow($('.Page_objectText'));
        }

        if(inputPageUrlId) {
          inputPageUrlId.replaceAll('.Page_pageUrlId');
          addGlow($('.Page_pageUrlId'));
        }

        if(inputPageUrlPk) {
          inputPageUrlPk.replaceAll('.Page_pageUrlPk');
          addGlow($('.Page_pageUrlPk'));
        }

        if(inputPageUrlApi) {
          inputPageUrlApi.replaceAll('.Page_pageUrlApi');
          addGlow($('.Page_pageUrlApi'));
        }

        if(inputId) {
          inputId.replaceAll('.Page_id');
          addGlow($('.Page_id'));
        }

        pageGraphBaseResult();
    });
  }
}

function pageGraphBaseResult(apiRequest) {
  var r = $('.pageForm .pageResponse').val();
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot1VarIndexed);
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = '';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).find(o => o.varIndexed === pivot2VarIndexed);
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
        }
        Plotly.react('htmBodyGraphPageLayout', data, layout);
      }
    }
  }
}

function animateStats() {
  $('#pageSearchVal-fqBaseResult_time').text('');
  searchPage('BaseResult', function() {
    let speedRate = parseFloat($('#animateStatsSpeed').val()) * 1000;
    let xStep = parseFloat($('#animateStatsStep').val());
    let xMin = parseFloat($('#animateStatsMin').val());
    let xMax = parseFloat($('#animateStatsMax').val());
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      $('#fqBaseResult_time').val(x);
      $('#fqBaseResult_time').change();
      searchPage('BaseResult');
    }, speedRate);
  });
}
