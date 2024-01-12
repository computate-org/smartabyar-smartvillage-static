
// Search //

async function searchSmartTrafficLight($formFilters, success, error) {
  var filters = searchSmartTrafficLightFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, textStatus, errorThrown ) {};

  searchSmartTrafficLightVals(filters, success, error);
}

function searchSmartTrafficLightFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.find('.valueObjectId').val();
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.find('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
    var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
    var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterEntityId = $formFilters.find('.valueEntityId').val();
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
    if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
      filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterRouteIds = $formFilters.find('.valueRouteIds').val();
    if(filterRouteIds != null && filterRouteIds !== '')
      filters.push({ name: 'fq', value: 'routeIds:' + filterRouteIds });

    var filterRouteIdNorth = $formFilters.find('.valueRouteIdNorth').val();
    if(filterRouteIdNorth != null && filterRouteIdNorth !== '')
      filters.push({ name: 'fq', value: 'routeIdNorth:' + filterRouteIdNorth });

    var filterRouteIdEast = $formFilters.find('.valueRouteIdEast').val();
    if(filterRouteIdEast != null && filterRouteIdEast !== '')
      filters.push({ name: 'fq', value: 'routeIdEast:' + filterRouteIdEast });

    var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
    if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
      filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

    var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
    if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
      filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

    var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
    if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
      filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

    var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
    if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
      filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

    var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
    if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
      filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

    var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
    if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

    var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
    if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

    var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
    if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

    var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
    if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

    var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
    if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

    var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
    if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

    var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
    if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

    var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
    if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
      filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

    var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
    if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

    var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
    if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

    var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
    if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

    var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
    if(filterParamRunTime != null && filterParamRunTime !== '')
      filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

    var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
    if(filterParamStepSize != null && filterParamStepSize !== '')
      filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

    var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
    if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
      filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

    var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
    if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
      filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

    var filterReportKeys = $formFilters.find('.valueReportKeys').val();
    if(filterReportKeys != null && filterReportKeys !== '')
      filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterInheritPk = $formFilters.find('.valueInheritPk').val();
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.find('.valueSessionId').val();
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.find('.valueUserKey').val();
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.find('.valueSaves').val();
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterEntityShortId = $formFilters.find('.valueEntityShortId').val();
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterAreaServedColors = $formFilters.find('.valueAreaServedColors').val();
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.find('.valueAreaServedTitles').val();
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.find('.valueAreaServedLinks').val();
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterTrafficFlowObservedIds = $formFilters.find('.valueTrafficFlowObservedIds').val();
    if(filterTrafficFlowObservedIds != null && filterTrafficFlowObservedIds !== '')
      filters.push({ name: 'fq', value: 'trafficFlowObservedIds:' + filterTrafficFlowObservedIds });

    var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
    if(filterParamDemandScale != null && filterParamDemandScale !== '')
      filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });
  }
  return filters;
}

function searchSmartTrafficLightVals(filters, success, error) {


  $.ajax({
    url: '/api/smart-traffic-light?' + $.param(filters)
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

function suggestSmartTrafficLightObjectSuggest($formFilters, $list) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    $.each(data['list'], function(i, o) {
      var $i = $('<i>').attr('class', 'fad fa-traffic-light-stop ');
      var $span = $('<span>').attr('class', '').text(o['objectTitle']);
      var $li = $('<li>');
      var $a = $('<a>').attr('href', o['pageUrlPk']);
      $a.append($i);
      $a.append($span);
      $li.append($a);
      $list.append($li);
    });
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchSmartTrafficLightVals($formFilters, success, error);
}

function suggestSmartTrafficLightReportKeys(filters, $list, pk = null, relate=true) {
  success = function( data, textStatus, jQxhr ) {
    $list.empty();
    $.each(data['list'], function(i, o) {
      var $i = $('<i>').attr('class', 'fa fa-file-chart-column ');
      var $span = $('<span>').attr('class', '').text(o['objectTitle']);
      var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk']);
      $a.append($i);
      $a.append($span);
      var val = o['smartTrafficLightKey'];
      var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
      var $input = $('<input>');
      $input.attr('id', 'GET_reportKeys_' + pk + '_smartTrafficLightKey_' + o['pk']);
      $input.attr('value', o['pk']);
      $input.attr('class', 'valueReportKeys w3-check ');
      if(pk != null) {
        $input.attr('onchange', "var $input = $('#GET_reportKeys_" + pk + "_smartTrafficLightKey_" + o['pk'] + "'); patchSmartTrafficLightVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'ReportKeys']: \"" + o['pk'] + "\" } ); ");
        $input.attr('onclick', 'removeGlow($(this)); ');
      }
      $input.attr('type', 'checkbox');
      if(checked)
        $input.attr('checked', 'checked');
      var $li = $('<li>');
      if(relate)
        $li.append($input);
      $li.append($a);
      $list.append($li);
    });
    var focusId = $('#SmartTrafficLightForm :input[name="focusId"]').val();
    if(focusId)
      $('#' + focusId).parent().next().find('input').focus();
  };
  error = function( jqXhr, textStatus, errorThrown ) {};
  searchSimulationReportVals(filters, success, error);
}

// GET //

async function getSmartTrafficLight(pk) {
  $.ajax({
    url: '/api/smart-traffic-light/' + id
    , dataType: 'json'
    , type: 'GET'
    , contentType: 'application/json; charset=utf-8'
    , success: success
    , error: error
  });
}

// PATCH //

async function patchSmartTrafficLight($formFilters, $formValues, pk, success, error) {
  var filters = patchSmartTrafficLightFilters($formFilters);

  var vals = {};

  var valueCreated = $formValues.find('.valueCreated').val();
  var removeCreated = $formValues.find('.removeCreated').val() === 'true';
  var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
  var addCreated = $formValues.find('.addCreated').val();
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.find('.removeCreated').val();
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.find('.valueModified').val();
  var removeModified = $formValues.find('.removeModified').val() === 'true';
  var setModified = removeModified ? null : $formValues.find('.setModified').val();
  var addModified = $formValues.find('.addModified').val();
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.find('.removeModified').val();
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueObjectId = $formValues.find('.valueObjectId').val();
  var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
  var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
  var addObjectId = $formValues.find('.addObjectId').val();
  if(removeObjectId || setObjectId != null && setObjectId !== '')
    vals['setObjectId'] = setObjectId;
  if(addObjectId != null && addObjectId !== '')
    vals['addObjectId'] = addObjectId;
  var removeObjectId = $formValues.find('.removeObjectId').val();
  if(removeObjectId != null && removeObjectId !== '')
    vals['removeObjectId'] = removeObjectId;

  var valueArchived = $formValues.find('.valueArchived').val();
  var removeArchived = $formValues.find('.removeArchived').val() === 'true';
  var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.find('.addArchived').prop('checked');
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.find('.removeArchived').prop('checked');
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueDeleted = $formValues.find('.valueDeleted').val();
  var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
  var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
  if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
    valueDeleted = valueDeletedSelectVal == 'true';
  var setDeleted = removeDeleted ? null : valueDeleted;
  var addDeleted = $formValues.find('.addDeleted').prop('checked');
  if(removeDeleted || setDeleted != null && setDeleted !== '')
    vals['setDeleted'] = setDeleted;
  if(addDeleted != null && addDeleted !== '')
    vals['addDeleted'] = addDeleted;
  var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
  if(removeDeleted != null && removeDeleted !== '')
    vals['removeDeleted'] = removeDeleted;

  var valueLocation = $formValues.find('.valueLocation').val();
  var removeLocation = $formValues.find('.removeLocation').val() === 'true';
  var setLocation = removeLocation ? null : $formValues.find('.setLocation').val();
  var addLocation = $formValues.find('.addLocation').val();
  if(removeLocation || setLocation != null && setLocation !== '')
    vals['setLocation'] = JSON.parse(setLocation);
  if(addLocation != null && addLocation !== '')
    vals['addLocation'] = addLocation;
  var removeLocation = $formValues.find('.removeLocation').val();
  if(removeLocation != null && removeLocation !== '')
    vals['removeLocation'] = removeLocation;

  var valueEntityId = $formValues.find('.valueEntityId').val();
  var removeEntityId = $formValues.find('.removeEntityId').val() === 'true';
  var setEntityId = removeEntityId ? null : $formValues.find('.setEntityId').val();
  var addEntityId = $formValues.find('.addEntityId').val();
  if(removeEntityId || setEntityId != null && setEntityId !== '')
    vals['setEntityId'] = setEntityId;
  if(addEntityId != null && addEntityId !== '')
    vals['addEntityId'] = addEntityId;
  var removeEntityId = $formValues.find('.removeEntityId').val();
  if(removeEntityId != null && removeEntityId !== '')
    vals['removeEntityId'] = removeEntityId;

  var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
  var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val() === 'true';
  var setSmartTrafficLightName = removeSmartTrafficLightName ? null : $formValues.find('.setSmartTrafficLightName').val();
  var addSmartTrafficLightName = $formValues.find('.addSmartTrafficLightName').val();
  if(removeSmartTrafficLightName || setSmartTrafficLightName != null && setSmartTrafficLightName !== '')
    vals['setSmartTrafficLightName'] = setSmartTrafficLightName;
  if(addSmartTrafficLightName != null && addSmartTrafficLightName !== '')
    vals['addSmartTrafficLightName'] = addSmartTrafficLightName;
  var removeSmartTrafficLightName = $formValues.find('.removeSmartTrafficLightName').val();
  if(removeSmartTrafficLightName != null && removeSmartTrafficLightName !== '')
    vals['removeSmartTrafficLightName'] = removeSmartTrafficLightName;

  var valueAreaServed = $formValues.find('.valueAreaServed').val();
  var removeAreaServed = $formValues.find('.removeAreaServed').val() === 'true';
  var setAreaServed = removeAreaServed ? null : $formValues.find('.setAreaServed').val();
  var addAreaServed = $formValues.find('.addAreaServed').val();
  if(removeAreaServed || setAreaServed != null && setAreaServed !== '')
    vals['setAreaServed'] = JSON.parse(setAreaServed);
  if(addAreaServed != null && addAreaServed !== '')
    vals['addAreaServed'] = addAreaServed;
  var removeAreaServed = $formValues.find('.removeAreaServed').val();
  if(removeAreaServed != null && removeAreaServed !== '')
    vals['removeAreaServed'] = removeAreaServed;

  var valueRouteIds = $formValues.find('.valueRouteIds').val();
  var removeRouteIds = $formValues.find('.removeRouteIds').val() === 'true';
  var setRouteIds = removeRouteIds ? null : $formValues.find('.setRouteIds').val();
  var addRouteIds = $formValues.find('.addRouteIds').val();
  if(removeRouteIds || setRouteIds != null && setRouteIds !== '')
    vals['setRouteIds'] = JSON.parse(setRouteIds);
  if(addRouteIds != null && addRouteIds !== '')
    vals['addRouteIds'] = addRouteIds;
  var removeRouteIds = $formValues.find('.removeRouteIds').val();
  if(removeRouteIds != null && removeRouteIds !== '')
    vals['removeRouteIds'] = removeRouteIds;

  var valueRouteIdNorth = $formValues.find('.valueRouteIdNorth').val();
  var removeRouteIdNorth = $formValues.find('.removeRouteIdNorth').val() === 'true';
  var setRouteIdNorth = removeRouteIdNorth ? null : $formValues.find('.setRouteIdNorth').val();
  var addRouteIdNorth = $formValues.find('.addRouteIdNorth').val();
  if(removeRouteIdNorth || setRouteIdNorth != null && setRouteIdNorth !== '')
    vals['setRouteIdNorth'] = setRouteIdNorth;
  if(addRouteIdNorth != null && addRouteIdNorth !== '')
    vals['addRouteIdNorth'] = addRouteIdNorth;
  var removeRouteIdNorth = $formValues.find('.removeRouteIdNorth').val();
  if(removeRouteIdNorth != null && removeRouteIdNorth !== '')
    vals['removeRouteIdNorth'] = removeRouteIdNorth;

  var valueRouteIdEast = $formValues.find('.valueRouteIdEast').val();
  var removeRouteIdEast = $formValues.find('.removeRouteIdEast').val() === 'true';
  var setRouteIdEast = removeRouteIdEast ? null : $formValues.find('.setRouteIdEast').val();
  var addRouteIdEast = $formValues.find('.addRouteIdEast').val();
  if(removeRouteIdEast || setRouteIdEast != null && setRouteIdEast !== '')
    vals['setRouteIdEast'] = setRouteIdEast;
  if(addRouteIdEast != null && addRouteIdEast !== '')
    vals['addRouteIdEast'] = addRouteIdEast;
  var removeRouteIdEast = $formValues.find('.removeRouteIdEast').val();
  if(removeRouteIdEast != null && removeRouteIdEast !== '')
    vals['removeRouteIdEast'] = removeRouteIdEast;

  var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
  var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val() === 'true';
  var setParamAvgVehiclePerMinFromWestToEast = removeParamAvgVehiclePerMinFromWestToEast ? null : $formValues.find('.setParamAvgVehiclePerMinFromWestToEast').val();
  var addParamAvgVehiclePerMinFromWestToEast = $formValues.find('.addParamAvgVehiclePerMinFromWestToEast').val();
  if(removeParamAvgVehiclePerMinFromWestToEast || setParamAvgVehiclePerMinFromWestToEast != null && setParamAvgVehiclePerMinFromWestToEast !== '')
    vals['setParamAvgVehiclePerMinFromWestToEast'] = setParamAvgVehiclePerMinFromWestToEast;
  if(addParamAvgVehiclePerMinFromWestToEast != null && addParamAvgVehiclePerMinFromWestToEast !== '')
    vals['addParamAvgVehiclePerMinFromWestToEast'] = addParamAvgVehiclePerMinFromWestToEast;
  var removeParamAvgVehiclePerMinFromWestToEast = $formValues.find('.removeParamAvgVehiclePerMinFromWestToEast').val();
  if(removeParamAvgVehiclePerMinFromWestToEast != null && removeParamAvgVehiclePerMinFromWestToEast !== '')
    vals['removeParamAvgVehiclePerMinFromWestToEast'] = removeParamAvgVehiclePerMinFromWestToEast;

  var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
  var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val() === 'true';
  var setParamAvgVehiclePerMinFromSouthToNorth = removeParamAvgVehiclePerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgVehiclePerMinFromSouthToNorth').val();
  var addParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.addParamAvgVehiclePerMinFromSouthToNorth').val();
  if(removeParamAvgVehiclePerMinFromSouthToNorth || setParamAvgVehiclePerMinFromSouthToNorth != null && setParamAvgVehiclePerMinFromSouthToNorth !== '')
    vals['setParamAvgVehiclePerMinFromSouthToNorth'] = setParamAvgVehiclePerMinFromSouthToNorth;
  if(addParamAvgVehiclePerMinFromSouthToNorth != null && addParamAvgVehiclePerMinFromSouthToNorth !== '')
    vals['addParamAvgVehiclePerMinFromSouthToNorth'] = addParamAvgVehiclePerMinFromSouthToNorth;
  var removeParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.removeParamAvgVehiclePerMinFromSouthToNorth').val();
  if(removeParamAvgVehiclePerMinFromSouthToNorth != null && removeParamAvgVehiclePerMinFromSouthToNorth !== '')
    vals['removeParamAvgVehiclePerMinFromSouthToNorth'] = removeParamAvgVehiclePerMinFromSouthToNorth;

  var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
  var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val() === 'true';
  var setParamVehicleDemandScalingFactor = removeParamVehicleDemandScalingFactor ? null : $formValues.find('.setParamVehicleDemandScalingFactor').val();
  var addParamVehicleDemandScalingFactor = $formValues.find('.addParamVehicleDemandScalingFactor').val();
  if(removeParamVehicleDemandScalingFactor || setParamVehicleDemandScalingFactor != null && setParamVehicleDemandScalingFactor !== '')
    vals['setParamVehicleDemandScalingFactor'] = setParamVehicleDemandScalingFactor;
  if(addParamVehicleDemandScalingFactor != null && addParamVehicleDemandScalingFactor !== '')
    vals['addParamVehicleDemandScalingFactor'] = addParamVehicleDemandScalingFactor;
  var removeParamVehicleDemandScalingFactor = $formValues.find('.removeParamVehicleDemandScalingFactor').val();
  if(removeParamVehicleDemandScalingFactor != null && removeParamVehicleDemandScalingFactor !== '')
    vals['removeParamVehicleDemandScalingFactor'] = removeParamVehicleDemandScalingFactor;

  var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
  var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val() === 'true';
  var setParamAvgPedestrianPerMinFromWestToEast = removeParamAvgPedestrianPerMinFromWestToEast ? null : $formValues.find('.setParamAvgPedestrianPerMinFromWestToEast').val();
  var addParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.addParamAvgPedestrianPerMinFromWestToEast').val();
  if(removeParamAvgPedestrianPerMinFromWestToEast || setParamAvgPedestrianPerMinFromWestToEast != null && setParamAvgPedestrianPerMinFromWestToEast !== '')
    vals['setParamAvgPedestrianPerMinFromWestToEast'] = setParamAvgPedestrianPerMinFromWestToEast;
  if(addParamAvgPedestrianPerMinFromWestToEast != null && addParamAvgPedestrianPerMinFromWestToEast !== '')
    vals['addParamAvgPedestrianPerMinFromWestToEast'] = addParamAvgPedestrianPerMinFromWestToEast;
  var removeParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.removeParamAvgPedestrianPerMinFromWestToEast').val();
  if(removeParamAvgPedestrianPerMinFromWestToEast != null && removeParamAvgPedestrianPerMinFromWestToEast !== '')
    vals['removeParamAvgPedestrianPerMinFromWestToEast'] = removeParamAvgPedestrianPerMinFromWestToEast;

  var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
  var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val() === 'true';
  var setParamAvgPedestrianPerMinFromSouthToNorth = removeParamAvgPedestrianPerMinFromSouthToNorth ? null : $formValues.find('.setParamAvgPedestrianPerMinFromSouthToNorth').val();
  var addParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.addParamAvgPedestrianPerMinFromSouthToNorth').val();
  if(removeParamAvgPedestrianPerMinFromSouthToNorth || setParamAvgPedestrianPerMinFromSouthToNorth != null && setParamAvgPedestrianPerMinFromSouthToNorth !== '')
    vals['setParamAvgPedestrianPerMinFromSouthToNorth'] = setParamAvgPedestrianPerMinFromSouthToNorth;
  if(addParamAvgPedestrianPerMinFromSouthToNorth != null && addParamAvgPedestrianPerMinFromSouthToNorth !== '')
    vals['addParamAvgPedestrianPerMinFromSouthToNorth'] = addParamAvgPedestrianPerMinFromSouthToNorth;
  var removeParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.removeParamAvgPedestrianPerMinFromSouthToNorth').val();
  if(removeParamAvgPedestrianPerMinFromSouthToNorth != null && removeParamAvgPedestrianPerMinFromSouthToNorth !== '')
    vals['removeParamAvgPedestrianPerMinFromSouthToNorth'] = removeParamAvgPedestrianPerMinFromSouthToNorth;

  var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
  var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val() === 'true';
  var setParamPedestrianDemandScalingFactor = removeParamPedestrianDemandScalingFactor ? null : $formValues.find('.setParamPedestrianDemandScalingFactor').val();
  var addParamPedestrianDemandScalingFactor = $formValues.find('.addParamPedestrianDemandScalingFactor').val();
  if(removeParamPedestrianDemandScalingFactor || setParamPedestrianDemandScalingFactor != null && setParamPedestrianDemandScalingFactor !== '')
    vals['setParamPedestrianDemandScalingFactor'] = setParamPedestrianDemandScalingFactor;
  if(addParamPedestrianDemandScalingFactor != null && addParamPedestrianDemandScalingFactor !== '')
    vals['addParamPedestrianDemandScalingFactor'] = addParamPedestrianDemandScalingFactor;
  var removeParamPedestrianDemandScalingFactor = $formValues.find('.removeParamPedestrianDemandScalingFactor').val();
  if(removeParamPedestrianDemandScalingFactor != null && removeParamPedestrianDemandScalingFactor !== '')
    vals['removeParamPedestrianDemandScalingFactor'] = removeParamPedestrianDemandScalingFactor;

  var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
  var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val() === 'true';
  var setParamMinGreenTimeSecWestEast = removeParamMinGreenTimeSecWestEast ? null : $formValues.find('.setParamMinGreenTimeSecWestEast').val();
  var addParamMinGreenTimeSecWestEast = $formValues.find('.addParamMinGreenTimeSecWestEast').val();
  if(removeParamMinGreenTimeSecWestEast || setParamMinGreenTimeSecWestEast != null && setParamMinGreenTimeSecWestEast !== '')
    vals['setParamMinGreenTimeSecWestEast'] = setParamMinGreenTimeSecWestEast;
  if(addParamMinGreenTimeSecWestEast != null && addParamMinGreenTimeSecWestEast !== '')
    vals['addParamMinGreenTimeSecWestEast'] = addParamMinGreenTimeSecWestEast;
  var removeParamMinGreenTimeSecWestEast = $formValues.find('.removeParamMinGreenTimeSecWestEast').val();
  if(removeParamMinGreenTimeSecWestEast != null && removeParamMinGreenTimeSecWestEast !== '')
    vals['removeParamMinGreenTimeSecWestEast'] = removeParamMinGreenTimeSecWestEast;

  var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
  var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val() === 'true';
  var setParamMaxGreenTimeSecWestEast = removeParamMaxGreenTimeSecWestEast ? null : $formValues.find('.setParamMaxGreenTimeSecWestEast').val();
  var addParamMaxGreenTimeSecWestEast = $formValues.find('.addParamMaxGreenTimeSecWestEast').val();
  if(removeParamMaxGreenTimeSecWestEast || setParamMaxGreenTimeSecWestEast != null && setParamMaxGreenTimeSecWestEast !== '')
    vals['setParamMaxGreenTimeSecWestEast'] = setParamMaxGreenTimeSecWestEast;
  if(addParamMaxGreenTimeSecWestEast != null && addParamMaxGreenTimeSecWestEast !== '')
    vals['addParamMaxGreenTimeSecWestEast'] = addParamMaxGreenTimeSecWestEast;
  var removeParamMaxGreenTimeSecWestEast = $formValues.find('.removeParamMaxGreenTimeSecWestEast').val();
  if(removeParamMaxGreenTimeSecWestEast != null && removeParamMaxGreenTimeSecWestEast !== '')
    vals['removeParamMaxGreenTimeSecWestEast'] = removeParamMaxGreenTimeSecWestEast;

  var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
  var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val() === 'true';
  var setParamMinGreenTimeSecSouthNorth = removeParamMinGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMinGreenTimeSecSouthNorth').val();
  var addParamMinGreenTimeSecSouthNorth = $formValues.find('.addParamMinGreenTimeSecSouthNorth').val();
  if(removeParamMinGreenTimeSecSouthNorth || setParamMinGreenTimeSecSouthNorth != null && setParamMinGreenTimeSecSouthNorth !== '')
    vals['setParamMinGreenTimeSecSouthNorth'] = setParamMinGreenTimeSecSouthNorth;
  if(addParamMinGreenTimeSecSouthNorth != null && addParamMinGreenTimeSecSouthNorth !== '')
    vals['addParamMinGreenTimeSecSouthNorth'] = addParamMinGreenTimeSecSouthNorth;
  var removeParamMinGreenTimeSecSouthNorth = $formValues.find('.removeParamMinGreenTimeSecSouthNorth').val();
  if(removeParamMinGreenTimeSecSouthNorth != null && removeParamMinGreenTimeSecSouthNorth !== '')
    vals['removeParamMinGreenTimeSecSouthNorth'] = removeParamMinGreenTimeSecSouthNorth;

  var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
  var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val() === 'true';
  var setParamMaxGreenTimeSecSouthNorth = removeParamMaxGreenTimeSecSouthNorth ? null : $formValues.find('.setParamMaxGreenTimeSecSouthNorth').val();
  var addParamMaxGreenTimeSecSouthNorth = $formValues.find('.addParamMaxGreenTimeSecSouthNorth').val();
  if(removeParamMaxGreenTimeSecSouthNorth || setParamMaxGreenTimeSecSouthNorth != null && setParamMaxGreenTimeSecSouthNorth !== '')
    vals['setParamMaxGreenTimeSecSouthNorth'] = setParamMaxGreenTimeSecSouthNorth;
  if(addParamMaxGreenTimeSecSouthNorth != null && addParamMaxGreenTimeSecSouthNorth !== '')
    vals['addParamMaxGreenTimeSecSouthNorth'] = addParamMaxGreenTimeSecSouthNorth;
  var removeParamMaxGreenTimeSecSouthNorth = $formValues.find('.removeParamMaxGreenTimeSecSouthNorth').val();
  if(removeParamMaxGreenTimeSecSouthNorth != null && removeParamMaxGreenTimeSecSouthNorth !== '')
    vals['removeParamMaxGreenTimeSecSouthNorth'] = removeParamMaxGreenTimeSecSouthNorth;

  var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
  var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val() === 'true';
  var setParamPedestrianWaitThresholdSecNorthSouth = removeParamPedestrianWaitThresholdSecNorthSouth ? null : $formValues.find('.setParamPedestrianWaitThresholdSecNorthSouth').val();
  var addParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.addParamPedestrianWaitThresholdSecNorthSouth').val();
  if(removeParamPedestrianWaitThresholdSecNorthSouth || setParamPedestrianWaitThresholdSecNorthSouth != null && setParamPedestrianWaitThresholdSecNorthSouth !== '')
    vals['setParamPedestrianWaitThresholdSecNorthSouth'] = setParamPedestrianWaitThresholdSecNorthSouth;
  if(addParamPedestrianWaitThresholdSecNorthSouth != null && addParamPedestrianWaitThresholdSecNorthSouth !== '')
    vals['addParamPedestrianWaitThresholdSecNorthSouth'] = addParamPedestrianWaitThresholdSecNorthSouth;
  var removeParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.removeParamPedestrianWaitThresholdSecNorthSouth').val();
  if(removeParamPedestrianWaitThresholdSecNorthSouth != null && removeParamPedestrianWaitThresholdSecNorthSouth !== '')
    vals['removeParamPedestrianWaitThresholdSecNorthSouth'] = removeParamPedestrianWaitThresholdSecNorthSouth;

  var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
  var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val() === 'true';
  var setParamPedestrianWaitThresholdSecWestEast = removeParamPedestrianWaitThresholdSecWestEast ? null : $formValues.find('.setParamPedestrianWaitThresholdSecWestEast').val();
  var addParamPedestrianWaitThresholdSecWestEast = $formValues.find('.addParamPedestrianWaitThresholdSecWestEast').val();
  if(removeParamPedestrianWaitThresholdSecWestEast || setParamPedestrianWaitThresholdSecWestEast != null && setParamPedestrianWaitThresholdSecWestEast !== '')
    vals['setParamPedestrianWaitThresholdSecWestEast'] = setParamPedestrianWaitThresholdSecWestEast;
  if(addParamPedestrianWaitThresholdSecWestEast != null && addParamPedestrianWaitThresholdSecWestEast !== '')
    vals['addParamPedestrianWaitThresholdSecWestEast'] = addParamPedestrianWaitThresholdSecWestEast;
  var removeParamPedestrianWaitThresholdSecWestEast = $formValues.find('.removeParamPedestrianWaitThresholdSecWestEast').val();
  if(removeParamPedestrianWaitThresholdSecWestEast != null && removeParamPedestrianWaitThresholdSecWestEast !== '')
    vals['removeParamPedestrianWaitThresholdSecWestEast'] = removeParamPedestrianWaitThresholdSecWestEast;

  var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
  var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val() === 'true';
  var setParamVehicleQueueThresholdWestEast = removeParamVehicleQueueThresholdWestEast ? null : $formValues.find('.setParamVehicleQueueThresholdWestEast').val();
  var addParamVehicleQueueThresholdWestEast = $formValues.find('.addParamVehicleQueueThresholdWestEast').val();
  if(removeParamVehicleQueueThresholdWestEast || setParamVehicleQueueThresholdWestEast != null && setParamVehicleQueueThresholdWestEast !== '')
    vals['setParamVehicleQueueThresholdWestEast'] = setParamVehicleQueueThresholdWestEast;
  if(addParamVehicleQueueThresholdWestEast != null && addParamVehicleQueueThresholdWestEast !== '')
    vals['addParamVehicleQueueThresholdWestEast'] = addParamVehicleQueueThresholdWestEast;
  var removeParamVehicleQueueThresholdWestEast = $formValues.find('.removeParamVehicleQueueThresholdWestEast').val();
  if(removeParamVehicleQueueThresholdWestEast != null && removeParamVehicleQueueThresholdWestEast !== '')
    vals['removeParamVehicleQueueThresholdWestEast'] = removeParamVehicleQueueThresholdWestEast;

  var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
  var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val() === 'true';
  var setParamVehicleQueueThresholdSouthNorth = removeParamVehicleQueueThresholdSouthNorth ? null : $formValues.find('.setParamVehicleQueueThresholdSouthNorth').val();
  var addParamVehicleQueueThresholdSouthNorth = $formValues.find('.addParamVehicleQueueThresholdSouthNorth').val();
  if(removeParamVehicleQueueThresholdSouthNorth || setParamVehicleQueueThresholdSouthNorth != null && setParamVehicleQueueThresholdSouthNorth !== '')
    vals['setParamVehicleQueueThresholdSouthNorth'] = setParamVehicleQueueThresholdSouthNorth;
  if(addParamVehicleQueueThresholdSouthNorth != null && addParamVehicleQueueThresholdSouthNorth !== '')
    vals['addParamVehicleQueueThresholdSouthNorth'] = addParamVehicleQueueThresholdSouthNorth;
  var removeParamVehicleQueueThresholdSouthNorth = $formValues.find('.removeParamVehicleQueueThresholdSouthNorth').val();
  if(removeParamVehicleQueueThresholdSouthNorth != null && removeParamVehicleQueueThresholdSouthNorth !== '')
    vals['removeParamVehicleQueueThresholdSouthNorth'] = removeParamVehicleQueueThresholdSouthNorth;

  var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
  var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val() === 'true';
  var setParamPedestrianQueueThresholdNorthSouth = removeParamPedestrianQueueThresholdNorthSouth ? null : $formValues.find('.setParamPedestrianQueueThresholdNorthSouth').val();
  var addParamPedestrianQueueThresholdNorthSouth = $formValues.find('.addParamPedestrianQueueThresholdNorthSouth').val();
  if(removeParamPedestrianQueueThresholdNorthSouth || setParamPedestrianQueueThresholdNorthSouth != null && setParamPedestrianQueueThresholdNorthSouth !== '')
    vals['setParamPedestrianQueueThresholdNorthSouth'] = setParamPedestrianQueueThresholdNorthSouth;
  if(addParamPedestrianQueueThresholdNorthSouth != null && addParamPedestrianQueueThresholdNorthSouth !== '')
    vals['addParamPedestrianQueueThresholdNorthSouth'] = addParamPedestrianQueueThresholdNorthSouth;
  var removeParamPedestrianQueueThresholdNorthSouth = $formValues.find('.removeParamPedestrianQueueThresholdNorthSouth').val();
  if(removeParamPedestrianQueueThresholdNorthSouth != null && removeParamPedestrianQueueThresholdNorthSouth !== '')
    vals['removeParamPedestrianQueueThresholdNorthSouth'] = removeParamPedestrianQueueThresholdNorthSouth;

  var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
  var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val() === 'true';
  var setParamPedestrianQueueThresholdWestEast = removeParamPedestrianQueueThresholdWestEast ? null : $formValues.find('.setParamPedestrianQueueThresholdWestEast').val();
  var addParamPedestrianQueueThresholdWestEast = $formValues.find('.addParamPedestrianQueueThresholdWestEast').val();
  if(removeParamPedestrianQueueThresholdWestEast || setParamPedestrianQueueThresholdWestEast != null && setParamPedestrianQueueThresholdWestEast !== '')
    vals['setParamPedestrianQueueThresholdWestEast'] = setParamPedestrianQueueThresholdWestEast;
  if(addParamPedestrianQueueThresholdWestEast != null && addParamPedestrianQueueThresholdWestEast !== '')
    vals['addParamPedestrianQueueThresholdWestEast'] = addParamPedestrianQueueThresholdWestEast;
  var removeParamPedestrianQueueThresholdWestEast = $formValues.find('.removeParamPedestrianQueueThresholdWestEast').val();
  if(removeParamPedestrianQueueThresholdWestEast != null && removeParamPedestrianQueueThresholdWestEast !== '')
    vals['removeParamPedestrianQueueThresholdWestEast'] = removeParamPedestrianQueueThresholdWestEast;

  var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
  var removeParamRunTime = $formValues.find('.removeParamRunTime').val() === 'true';
  var setParamRunTime = removeParamRunTime ? null : $formValues.find('.setParamRunTime').val();
  var addParamRunTime = $formValues.find('.addParamRunTime').val();
  if(removeParamRunTime || setParamRunTime != null && setParamRunTime !== '')
    vals['setParamRunTime'] = setParamRunTime;
  if(addParamRunTime != null && addParamRunTime !== '')
    vals['addParamRunTime'] = addParamRunTime;
  var removeParamRunTime = $formValues.find('.removeParamRunTime').val();
  if(removeParamRunTime != null && removeParamRunTime !== '')
    vals['removeParamRunTime'] = removeParamRunTime;

  var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
  var removeParamStepSize = $formValues.find('.removeParamStepSize').val() === 'true';
  var setParamStepSize = removeParamStepSize ? null : $formValues.find('.setParamStepSize').val();
  var addParamStepSize = $formValues.find('.addParamStepSize').val();
  if(removeParamStepSize || setParamStepSize != null && setParamStepSize !== '')
    vals['setParamStepSize'] = setParamStepSize;
  if(addParamStepSize != null && addParamStepSize !== '')
    vals['addParamStepSize'] = addParamStepSize;
  var removeParamStepSize = $formValues.find('.removeParamStepSize').val();
  if(removeParamStepSize != null && removeParamStepSize !== '')
    vals['removeParamStepSize'] = removeParamStepSize;

  var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
  var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val() === 'true';
  var setParamItersPerPar = removeParamItersPerPar ? null : $formValues.find('.setParamItersPerPar').val();
  var addParamItersPerPar = $formValues.find('.addParamItersPerPar').val();
  if(removeParamItersPerPar || setParamItersPerPar != null && setParamItersPerPar !== '')
    vals['setParamItersPerPar'] = setParamItersPerPar;
  if(addParamItersPerPar != null && addParamItersPerPar !== '')
    vals['addParamItersPerPar'] = addParamItersPerPar;
  var removeParamItersPerPar = $formValues.find('.removeParamItersPerPar').val();
  if(removeParamItersPerPar != null && removeParamItersPerPar !== '')
    vals['removeParamItersPerPar'] = removeParamItersPerPar;

  var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
  var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val() === 'true';
  var setParamTotalIterNum = removeParamTotalIterNum ? null : $formValues.find('.setParamTotalIterNum').val();
  var addParamTotalIterNum = $formValues.find('.addParamTotalIterNum').val();
  if(removeParamTotalIterNum || setParamTotalIterNum != null && setParamTotalIterNum !== '')
    vals['setParamTotalIterNum'] = setParamTotalIterNum;
  if(addParamTotalIterNum != null && addParamTotalIterNum !== '')
    vals['addParamTotalIterNum'] = addParamTotalIterNum;
  var removeParamTotalIterNum = $formValues.find('.removeParamTotalIterNum').val();
  if(removeParamTotalIterNum != null && removeParamTotalIterNum !== '')
    vals['removeParamTotalIterNum'] = removeParamTotalIterNum;

  var valueReportKeys = $formValues.find('input.valueReportKeys:checked').val();
  if(valueReportKeys != null && valueReportKeys !== '')
    vals['addReportKeys'] = valueReportKeys;

  var valueInheritPk = $formValues.find('.valueInheritPk').val();
  var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
  var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
  var addInheritPk = $formValues.find('.addInheritPk').val();
  if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
    vals['setInheritPk'] = setInheritPk;
  if(addInheritPk != null && addInheritPk !== '')
    vals['addInheritPk'] = addInheritPk;
  var removeInheritPk = $formValues.find('.removeInheritPk').val();
  if(removeInheritPk != null && removeInheritPk !== '')
    vals['removeInheritPk'] = removeInheritPk;

  var valueSessionId = $formValues.find('.valueSessionId').val();
  var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
  var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
  var addSessionId = $formValues.find('.addSessionId').val();
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.find('.removeSessionId').val();
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.find('.valueUserKey').val();
  var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
  var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
  var addUserKey = $formValues.find('.addUserKey').val();
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.find('.removeUserKey').val();
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
  var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
  var addObjectTitle = $formValues.find('.addObjectTitle').val();
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  patchSmartTrafficLightVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSmartTrafficLightFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterCreated = $formFilters.find('.valueCreated').val();
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.find('.valueModified').val();
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var filterObjectId = $formFilters.find('.valueObjectId').val();
    if(filterObjectId != null && filterObjectId !== '')
      filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

    var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.find('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
    var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
    var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
    var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
    var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
    var filterDeleted = null;
    if(filterDeletedSelectVal !== '')
      filterDeleted = filterDeletedSelectVal == 'true';
    if(filterDeleted != null && filterDeleted === true)
      filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

    var filterLocation = $formFilters.find('.valueLocation').val();
    if(filterLocation != null && filterLocation !== '')
      filters.push({ name: 'fq', value: 'location:' + filterLocation });

    var filterEntityId = $formFilters.find('.valueEntityId').val();
    if(filterEntityId != null && filterEntityId !== '')
      filters.push({ name: 'fq', value: 'entityId:' + filterEntityId });

    var filterSmartTrafficLightName = $formFilters.find('.valueSmartTrafficLightName').val();
    if(filterSmartTrafficLightName != null && filterSmartTrafficLightName !== '')
      filters.push({ name: 'fq', value: 'smartTrafficLightName:' + filterSmartTrafficLightName });

    var filterAreaServed = $formFilters.find('.valueAreaServed').val();
    if(filterAreaServed != null && filterAreaServed !== '')
      filters.push({ name: 'fq', value: 'areaServed:' + filterAreaServed });

    var filterRouteIds = $formFilters.find('.valueRouteIds').val();
    if(filterRouteIds != null && filterRouteIds !== '')
      filters.push({ name: 'fq', value: 'routeIds:' + filterRouteIds });

    var filterRouteIdNorth = $formFilters.find('.valueRouteIdNorth').val();
    if(filterRouteIdNorth != null && filterRouteIdNorth !== '')
      filters.push({ name: 'fq', value: 'routeIdNorth:' + filterRouteIdNorth });

    var filterRouteIdEast = $formFilters.find('.valueRouteIdEast').val();
    if(filterRouteIdEast != null && filterRouteIdEast !== '')
      filters.push({ name: 'fq', value: 'routeIdEast:' + filterRouteIdEast });

    var filterParamAvgVehiclePerMinFromWestToEast = $formFilters.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
    if(filterParamAvgVehiclePerMinFromWestToEast != null && filterParamAvgVehiclePerMinFromWestToEast !== '')
      filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromWestToEast:' + filterParamAvgVehiclePerMinFromWestToEast });

    var filterParamAvgVehiclePerMinFromSouthToNorth = $formFilters.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
    if(filterParamAvgVehiclePerMinFromSouthToNorth != null && filterParamAvgVehiclePerMinFromSouthToNorth !== '')
      filters.push({ name: 'fq', value: 'paramAvgVehiclePerMinFromSouthToNorth:' + filterParamAvgVehiclePerMinFromSouthToNorth });

    var filterParamVehicleDemandScalingFactor = $formFilters.find('.valueParamVehicleDemandScalingFactor').val();
    if(filterParamVehicleDemandScalingFactor != null && filterParamVehicleDemandScalingFactor !== '')
      filters.push({ name: 'fq', value: 'paramVehicleDemandScalingFactor:' + filterParamVehicleDemandScalingFactor });

    var filterParamAvgPedestrianPerMinFromWestToEast = $formFilters.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
    if(filterParamAvgPedestrianPerMinFromWestToEast != null && filterParamAvgPedestrianPerMinFromWestToEast !== '')
      filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromWestToEast:' + filterParamAvgPedestrianPerMinFromWestToEast });

    var filterParamAvgPedestrianPerMinFromSouthToNorth = $formFilters.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
    if(filterParamAvgPedestrianPerMinFromSouthToNorth != null && filterParamAvgPedestrianPerMinFromSouthToNorth !== '')
      filters.push({ name: 'fq', value: 'paramAvgPedestrianPerMinFromSouthToNorth:' + filterParamAvgPedestrianPerMinFromSouthToNorth });

    var filterParamPedestrianDemandScalingFactor = $formFilters.find('.valueParamPedestrianDemandScalingFactor').val();
    if(filterParamPedestrianDemandScalingFactor != null && filterParamPedestrianDemandScalingFactor !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianDemandScalingFactor:' + filterParamPedestrianDemandScalingFactor });

    var filterParamMinGreenTimeSecWestEast = $formFilters.find('.valueParamMinGreenTimeSecWestEast').val();
    if(filterParamMinGreenTimeSecWestEast != null && filterParamMinGreenTimeSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramMinGreenTimeSecWestEast:' + filterParamMinGreenTimeSecWestEast });

    var filterParamMaxGreenTimeSecWestEast = $formFilters.find('.valueParamMaxGreenTimeSecWestEast').val();
    if(filterParamMaxGreenTimeSecWestEast != null && filterParamMaxGreenTimeSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecWestEast:' + filterParamMaxGreenTimeSecWestEast });

    var filterParamMinGreenTimeSecSouthNorth = $formFilters.find('.valueParamMinGreenTimeSecSouthNorth').val();
    if(filterParamMinGreenTimeSecSouthNorth != null && filterParamMinGreenTimeSecSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramMinGreenTimeSecSouthNorth:' + filterParamMinGreenTimeSecSouthNorth });

    var filterParamMaxGreenTimeSecSouthNorth = $formFilters.find('.valueParamMaxGreenTimeSecSouthNorth').val();
    if(filterParamMaxGreenTimeSecSouthNorth != null && filterParamMaxGreenTimeSecSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramMaxGreenTimeSecSouthNorth:' + filterParamMaxGreenTimeSecSouthNorth });

    var filterParamPedestrianWaitThresholdSecNorthSouth = $formFilters.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
    if(filterParamPedestrianWaitThresholdSecNorthSouth != null && filterParamPedestrianWaitThresholdSecNorthSouth !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecNorthSouth:' + filterParamPedestrianWaitThresholdSecNorthSouth });

    var filterParamPedestrianWaitThresholdSecWestEast = $formFilters.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
    if(filterParamPedestrianWaitThresholdSecWestEast != null && filterParamPedestrianWaitThresholdSecWestEast !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianWaitThresholdSecWestEast:' + filterParamPedestrianWaitThresholdSecWestEast });

    var filterParamVehicleQueueThresholdWestEast = $formFilters.find('.valueParamVehicleQueueThresholdWestEast').val();
    if(filterParamVehicleQueueThresholdWestEast != null && filterParamVehicleQueueThresholdWestEast !== '')
      filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdWestEast:' + filterParamVehicleQueueThresholdWestEast });

    var filterParamVehicleQueueThresholdSouthNorth = $formFilters.find('.valueParamVehicleQueueThresholdSouthNorth').val();
    if(filterParamVehicleQueueThresholdSouthNorth != null && filterParamVehicleQueueThresholdSouthNorth !== '')
      filters.push({ name: 'fq', value: 'paramVehicleQueueThresholdSouthNorth:' + filterParamVehicleQueueThresholdSouthNorth });

    var filterParamPedestrianQueueThresholdNorthSouth = $formFilters.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
    if(filterParamPedestrianQueueThresholdNorthSouth != null && filterParamPedestrianQueueThresholdNorthSouth !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdNorthSouth:' + filterParamPedestrianQueueThresholdNorthSouth });

    var filterParamPedestrianQueueThresholdWestEast = $formFilters.find('.valueParamPedestrianQueueThresholdWestEast').val();
    if(filterParamPedestrianQueueThresholdWestEast != null && filterParamPedestrianQueueThresholdWestEast !== '')
      filters.push({ name: 'fq', value: 'paramPedestrianQueueThresholdWestEast:' + filterParamPedestrianQueueThresholdWestEast });

    var filterParamRunTime = $formFilters.find('.valueParamRunTime').val();
    if(filterParamRunTime != null && filterParamRunTime !== '')
      filters.push({ name: 'fq', value: 'paramRunTime:' + filterParamRunTime });

    var filterParamStepSize = $formFilters.find('.valueParamStepSize').val();
    if(filterParamStepSize != null && filterParamStepSize !== '')
      filters.push({ name: 'fq', value: 'paramStepSize:' + filterParamStepSize });

    var filterParamItersPerPar = $formFilters.find('.valueParamItersPerPar').val();
    if(filterParamItersPerPar != null && filterParamItersPerPar !== '')
      filters.push({ name: 'fq', value: 'paramItersPerPar:' + filterParamItersPerPar });

    var filterParamTotalIterNum = $formFilters.find('.valueParamTotalIterNum').val();
    if(filterParamTotalIterNum != null && filterParamTotalIterNum !== '')
      filters.push({ name: 'fq', value: 'paramTotalIterNum:' + filterParamTotalIterNum });

    var filterReportKeys = $formFilters.find('.valueReportKeys').val();
    if(filterReportKeys != null && filterReportKeys !== '')
      filters.push({ name: 'fq', value: 'reportKeys:' + filterReportKeys });

    var filterPk = $formFilters.find('.valuePk').val();
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterInheritPk = $formFilters.find('.valueInheritPk').val();
    if(filterInheritPk != null && filterInheritPk !== '')
      filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

    var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.find('.valueSessionId').val();
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.find('.valueUserKey').val();
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.find('.valueSaves').val();
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.find('.valueObjectText').val();
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
    if(filterPageUrlId != null && filterPageUrlId !== '')
      filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

    var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
    if(filterPageUrlPk != null && filterPageUrlPk !== '')
      filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

    var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
    if(filterPageUrlApi != null && filterPageUrlApi !== '')
      filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

    var filterId = $formFilters.find('.valueId').val();
    if(filterId != null && filterId !== '')
      filters.push({ name: 'fq', value: 'id:' + filterId });

    var filterEntityShortId = $formFilters.find('.valueEntityShortId').val();
    if(filterEntityShortId != null && filterEntityShortId !== '')
      filters.push({ name: 'fq', value: 'entityShortId:' + filterEntityShortId });

    var filterAreaServedColors = $formFilters.find('.valueAreaServedColors').val();
    if(filterAreaServedColors != null && filterAreaServedColors !== '')
      filters.push({ name: 'fq', value: 'areaServedColors:' + filterAreaServedColors });

    var filterAreaServedTitles = $formFilters.find('.valueAreaServedTitles').val();
    if(filterAreaServedTitles != null && filterAreaServedTitles !== '')
      filters.push({ name: 'fq', value: 'areaServedTitles:' + filterAreaServedTitles });

    var filterAreaServedLinks = $formFilters.find('.valueAreaServedLinks').val();
    if(filterAreaServedLinks != null && filterAreaServedLinks !== '')
      filters.push({ name: 'fq', value: 'areaServedLinks:' + filterAreaServedLinks });

    var filterTrafficFlowObservedIds = $formFilters.find('.valueTrafficFlowObservedIds').val();
    if(filterTrafficFlowObservedIds != null && filterTrafficFlowObservedIds !== '')
      filters.push({ name: 'fq', value: 'trafficFlowObservedIds:' + filterTrafficFlowObservedIds });

    var filterParamDemandScale = $formFilters.find('.valueParamDemandScale').val();
    if(filterParamDemandScale != null && filterParamDemandScale !== '')
      filters.push({ name: 'fq', value: 'paramDemandScale:' + filterParamDemandScale });
  }
  return filters;
}

function patchSmartTrafficLightVal(filters, v, val, success, error) {
  var vals = {};
  vals[v] = val;
  patchSmartTrafficLightVals(filters, vals, success, error);
}

function patchSmartTrafficLightVals(filters, vals, success, error) {
  $.ajax({
    url: '/api/smart-traffic-light?' + $.param(filters)
    , dataType: 'json'
    , type: 'PATCH'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// POST //

async function postSmartTrafficLight($formValues, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow($formValues.next('button'));
      var url = data['pageUrlPk'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, textStatus, errorThrown ) {
      addError($formValues.next('button'));
    };
  }

  var valueCreated = $formValues.find('.valueCreated').val();
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.find('.valueModified').val();
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueObjectId = $formValues.find('.valueObjectId').val();
  if(valueObjectId != null && valueObjectId !== '')
    vals['objectId'] = valueObjectId;

  var valueArchived = $formValues.find('.valueArchived').val();
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueDeleted = $formValues.find('.valueDeleted').val();
  if(valueDeleted != null && valueDeleted !== '')
    vals['deleted'] = valueDeleted == 'true';

  var valueLocation = $formValues.find('.valueLocation').val();
  if(valueLocation != null && valueLocation !== '')
    vals['location'] = JSON.parse(valueLocation);

  var valueEntityId = $formValues.find('.valueEntityId').val();
  if(valueEntityId != null && valueEntityId !== '')
    vals['entityId'] = valueEntityId;

  var valueSmartTrafficLightName = $formValues.find('.valueSmartTrafficLightName').val();
  if(valueSmartTrafficLightName != null && valueSmartTrafficLightName !== '')
    vals['smartTrafficLightName'] = valueSmartTrafficLightName;

  var valueAreaServed = $formValues.find('.valueAreaServed').val();
  if(valueAreaServed != null && valueAreaServed !== '')
    vals['areaServed'] = JSON.parse(valueAreaServed);

  var valueRouteIds = $formValues.find('.valueRouteIds').val();
  if(valueRouteIds != null && valueRouteIds !== '')
    vals['routeIds'] = JSON.parse(valueRouteIds);

  var valueRouteIdNorth = $formValues.find('.valueRouteIdNorth').val();
  if(valueRouteIdNorth != null && valueRouteIdNorth !== '')
    vals['routeIdNorth'] = valueRouteIdNorth;

  var valueRouteIdEast = $formValues.find('.valueRouteIdEast').val();
  if(valueRouteIdEast != null && valueRouteIdEast !== '')
    vals['routeIdEast'] = valueRouteIdEast;

  var valueParamAvgVehiclePerMinFromWestToEast = $formValues.find('.valueParamAvgVehiclePerMinFromWestToEast').val();
  if(valueParamAvgVehiclePerMinFromWestToEast != null && valueParamAvgVehiclePerMinFromWestToEast !== '')
    vals['paramAvgVehiclePerMinFromWestToEast'] = valueParamAvgVehiclePerMinFromWestToEast;

  var valueParamAvgVehiclePerMinFromSouthToNorth = $formValues.find('.valueParamAvgVehiclePerMinFromSouthToNorth').val();
  if(valueParamAvgVehiclePerMinFromSouthToNorth != null && valueParamAvgVehiclePerMinFromSouthToNorth !== '')
    vals['paramAvgVehiclePerMinFromSouthToNorth'] = valueParamAvgVehiclePerMinFromSouthToNorth;

  var valueParamVehicleDemandScalingFactor = $formValues.find('.valueParamVehicleDemandScalingFactor').val();
  if(valueParamVehicleDemandScalingFactor != null && valueParamVehicleDemandScalingFactor !== '')
    vals['paramVehicleDemandScalingFactor'] = valueParamVehicleDemandScalingFactor;

  var valueParamAvgPedestrianPerMinFromWestToEast = $formValues.find('.valueParamAvgPedestrianPerMinFromWestToEast').val();
  if(valueParamAvgPedestrianPerMinFromWestToEast != null && valueParamAvgPedestrianPerMinFromWestToEast !== '')
    vals['paramAvgPedestrianPerMinFromWestToEast'] = valueParamAvgPedestrianPerMinFromWestToEast;

  var valueParamAvgPedestrianPerMinFromSouthToNorth = $formValues.find('.valueParamAvgPedestrianPerMinFromSouthToNorth').val();
  if(valueParamAvgPedestrianPerMinFromSouthToNorth != null && valueParamAvgPedestrianPerMinFromSouthToNorth !== '')
    vals['paramAvgPedestrianPerMinFromSouthToNorth'] = valueParamAvgPedestrianPerMinFromSouthToNorth;

  var valueParamPedestrianDemandScalingFactor = $formValues.find('.valueParamPedestrianDemandScalingFactor').val();
  if(valueParamPedestrianDemandScalingFactor != null && valueParamPedestrianDemandScalingFactor !== '')
    vals['paramPedestrianDemandScalingFactor'] = valueParamPedestrianDemandScalingFactor;

  var valueParamMinGreenTimeSecWestEast = $formValues.find('.valueParamMinGreenTimeSecWestEast').val();
  if(valueParamMinGreenTimeSecWestEast != null && valueParamMinGreenTimeSecWestEast !== '')
    vals['paramMinGreenTimeSecWestEast'] = valueParamMinGreenTimeSecWestEast;

  var valueParamMaxGreenTimeSecWestEast = $formValues.find('.valueParamMaxGreenTimeSecWestEast').val();
  if(valueParamMaxGreenTimeSecWestEast != null && valueParamMaxGreenTimeSecWestEast !== '')
    vals['paramMaxGreenTimeSecWestEast'] = valueParamMaxGreenTimeSecWestEast;

  var valueParamMinGreenTimeSecSouthNorth = $formValues.find('.valueParamMinGreenTimeSecSouthNorth').val();
  if(valueParamMinGreenTimeSecSouthNorth != null && valueParamMinGreenTimeSecSouthNorth !== '')
    vals['paramMinGreenTimeSecSouthNorth'] = valueParamMinGreenTimeSecSouthNorth;

  var valueParamMaxGreenTimeSecSouthNorth = $formValues.find('.valueParamMaxGreenTimeSecSouthNorth').val();
  if(valueParamMaxGreenTimeSecSouthNorth != null && valueParamMaxGreenTimeSecSouthNorth !== '')
    vals['paramMaxGreenTimeSecSouthNorth'] = valueParamMaxGreenTimeSecSouthNorth;

  var valueParamPedestrianWaitThresholdSecNorthSouth = $formValues.find('.valueParamPedestrianWaitThresholdSecNorthSouth').val();
  if(valueParamPedestrianWaitThresholdSecNorthSouth != null && valueParamPedestrianWaitThresholdSecNorthSouth !== '')
    vals['paramPedestrianWaitThresholdSecNorthSouth'] = valueParamPedestrianWaitThresholdSecNorthSouth;

  var valueParamPedestrianWaitThresholdSecWestEast = $formValues.find('.valueParamPedestrianWaitThresholdSecWestEast').val();
  if(valueParamPedestrianWaitThresholdSecWestEast != null && valueParamPedestrianWaitThresholdSecWestEast !== '')
    vals['paramPedestrianWaitThresholdSecWestEast'] = valueParamPedestrianWaitThresholdSecWestEast;

  var valueParamVehicleQueueThresholdWestEast = $formValues.find('.valueParamVehicleQueueThresholdWestEast').val();
  if(valueParamVehicleQueueThresholdWestEast != null && valueParamVehicleQueueThresholdWestEast !== '')
    vals['paramVehicleQueueThresholdWestEast'] = valueParamVehicleQueueThresholdWestEast;

  var valueParamVehicleQueueThresholdSouthNorth = $formValues.find('.valueParamVehicleQueueThresholdSouthNorth').val();
  if(valueParamVehicleQueueThresholdSouthNorth != null && valueParamVehicleQueueThresholdSouthNorth !== '')
    vals['paramVehicleQueueThresholdSouthNorth'] = valueParamVehicleQueueThresholdSouthNorth;

  var valueParamPedestrianQueueThresholdNorthSouth = $formValues.find('.valueParamPedestrianQueueThresholdNorthSouth').val();
  if(valueParamPedestrianQueueThresholdNorthSouth != null && valueParamPedestrianQueueThresholdNorthSouth !== '')
    vals['paramPedestrianQueueThresholdNorthSouth'] = valueParamPedestrianQueueThresholdNorthSouth;

  var valueParamPedestrianQueueThresholdWestEast = $formValues.find('.valueParamPedestrianQueueThresholdWestEast').val();
  if(valueParamPedestrianQueueThresholdWestEast != null && valueParamPedestrianQueueThresholdWestEast !== '')
    vals['paramPedestrianQueueThresholdWestEast'] = valueParamPedestrianQueueThresholdWestEast;

  var valueParamRunTime = $formValues.find('.valueParamRunTime').val();
  if(valueParamRunTime != null && valueParamRunTime !== '')
    vals['paramRunTime'] = valueParamRunTime;

  var valueParamStepSize = $formValues.find('.valueParamStepSize').val();
  if(valueParamStepSize != null && valueParamStepSize !== '')
    vals['paramStepSize'] = valueParamStepSize;

  var valueParamItersPerPar = $formValues.find('.valueParamItersPerPar').val();
  if(valueParamItersPerPar != null && valueParamItersPerPar !== '')
    vals['paramItersPerPar'] = valueParamItersPerPar;

  var valueParamTotalIterNum = $formValues.find('.valueParamTotalIterNum').val();
  if(valueParamTotalIterNum != null && valueParamTotalIterNum !== '')
    vals['paramTotalIterNum'] = valueParamTotalIterNum;

  var valueReportKeys = [];
  $formValues.find('input.valueReportKeys:checked').each(function(index) {
    valueReportKeys.push($(this).val());
  });
  if(valueReportKeys.length > 0)
    vals['reportKeys'] = valueReportKeys;

  var valueInheritPk = $formValues.find('.valueInheritPk').val();
  if(valueInheritPk != null && valueInheritPk !== '')
    vals['inheritPk'] = valueInheritPk;

  var valueSessionId = $formValues.find('.valueSessionId').val();
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.find('.valueUserKey').val();
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  $.ajax({
    url: '/api/smart-traffic-light'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

function postSmartTrafficLightVals(vals, success, error) {
  $.ajax({
    url: '/api/smart-traffic-light'
    , dataType: 'json'
    , type: 'POST'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(vals)
    , success: success
    , error: error
  });
}

// PUTImport //

async function putimportSmartTrafficLight($formValues, pk, success, error) {
  var json = $formValues.find('.PUTImport_searchList').val();
  if(json != null && json !== '')
    putimportSmartTrafficLightVals(JSON.parse(json), success, error);
}

function putimportSmartTrafficLightVals(json, success, error) {
  $.ajax({
    url: '/api/smart-traffic-light-import'
    , dataType: 'json'
    , type: 'PUT'
    , contentType: 'application/json; charset=utf-8'
    , data: JSON.stringify(json)
    , success: success
    , error: error
  });
}

async function websocketSmartTrafficLight(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSmartTrafficLight', function (error, message) {
      var json = JSON.parse(message['body']);
      var id = json['id'];
      var pk = json['pk'];
      var pkPage = $('#SmartTrafficLightForm :input[name=pk]').val();
      var pks = json['pks'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = $('<div>').attr('class', 'w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
      var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
      var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
      var $header = $('<div>').attr('class', 'w3-container fa-2017-shaded-spruce ').attr('id', 'header-' + id);
      var $i = $('<i>').attr('class', 'fad fa-traffic-light-stop w3-margin-right ').attr('id', 'icon-' + id);
      var $headerSpan = $('<span>').attr('class', '').text('modify smart traffic lights in ' + json.timeRemaining);
      var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
      var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
      var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
      var $progress = $('<div>').attr('class', 'w3-2017-shaded-spruce ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
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

    window.eventBus.registerHandler('websocketSimulationReport', function (error, message) {
      $('.Page_reportKeys').trigger('oninput');
      $('.Page_reportKeys_add').text('add a simulation report');
      $('.Page_reportKeys_add').removeClass('w3-disabled');
      $('.Page_reportKeys_add').attr('disabled', false);
    });
  }
}
async function websocketSmartTrafficLightInner(apiRequest) {
  var pk = apiRequest['pk'];
  var pks = apiRequest['pks'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(pk != null && vars.length > 0) {
    var queryParams = "?" + $(".pageSearchVal").get().filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    $.get(uri, {}, function(data) {
      var $response = $("<html/>").html(data);
        var inputCreated = null;
        var inputModified = null;
        var inputObjectId = null;
        var inputArchived = null;
        var inputDeleted = null;
        var inputLocation = null;
        var inputEntityId = null;
        var inputSmartTrafficLightName = null;
        var inputAreaServed = null;
        var inputRouteIds = null;
        var inputRouteIdNorth = null;
        var inputRouteIdEast = null;
        var inputParamAvgVehiclePerMinFromWestToEast = null;
        var inputParamAvgVehiclePerMinFromSouthToNorth = null;
        var inputParamVehicleDemandScalingFactor = null;
        var inputParamAvgPedestrianPerMinFromWestToEast = null;
        var inputParamAvgPedestrianPerMinFromSouthToNorth = null;
        var inputParamPedestrianDemandScalingFactor = null;
        var inputParamMinGreenTimeSecWestEast = null;
        var inputParamMaxGreenTimeSecWestEast = null;
        var inputParamMinGreenTimeSecSouthNorth = null;
        var inputParamMaxGreenTimeSecSouthNorth = null;
        var inputParamPedestrianWaitThresholdSecNorthSouth = null;
        var inputParamPedestrianWaitThresholdSecWestEast = null;
        var inputParamVehicleQueueThresholdWestEast = null;
        var inputParamVehicleQueueThresholdSouthNorth = null;
        var inputParamPedestrianQueueThresholdNorthSouth = null;
        var inputParamPedestrianQueueThresholdWestEast = null;
        var inputParamRunTime = null;
        var inputParamStepSize = null;
        var inputParamItersPerPar = null;
        var inputParamTotalIterNum = null;
        var inputReportKeys = null;
        var inputPk = null;
        var inputInheritPk = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputPageUrlId = null;
        var inputPageUrlPk = null;
        var inputPageUrlApi = null;
        var inputId = null;
        var inputEntityShortId = null;
        var inputAreaServedColors = null;
        var inputAreaServedTitles = null;
        var inputAreaServedLinks = null;
        var inputTrafficFlowObservedIds = null;
        var inputParamDemandScale = null;

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
        if(vars.includes('location'))
          inputLocation = $response.find('.Page_location');
        if(vars.includes('entityId'))
          inputEntityId = $response.find('.Page_entityId');
        if(vars.includes('smartTrafficLightName'))
          inputSmartTrafficLightName = $response.find('.Page_smartTrafficLightName');
        if(vars.includes('areaServed'))
          inputAreaServed = $response.find('.Page_areaServed');
        if(vars.includes('routeIds'))
          inputRouteIds = $response.find('.Page_routeIds');
        if(vars.includes('routeIdNorth'))
          inputRouteIdNorth = $response.find('.Page_routeIdNorth');
        if(vars.includes('routeIdEast'))
          inputRouteIdEast = $response.find('.Page_routeIdEast');
        if(vars.includes('paramAvgVehiclePerMinFromWestToEast'))
          inputParamAvgVehiclePerMinFromWestToEast = $response.find('.Page_paramAvgVehiclePerMinFromWestToEast');
        if(vars.includes('paramAvgVehiclePerMinFromSouthToNorth'))
          inputParamAvgVehiclePerMinFromSouthToNorth = $response.find('.Page_paramAvgVehiclePerMinFromSouthToNorth');
        if(vars.includes('paramVehicleDemandScalingFactor'))
          inputParamVehicleDemandScalingFactor = $response.find('.Page_paramVehicleDemandScalingFactor');
        if(vars.includes('paramAvgPedestrianPerMinFromWestToEast'))
          inputParamAvgPedestrianPerMinFromWestToEast = $response.find('.Page_paramAvgPedestrianPerMinFromWestToEast');
        if(vars.includes('paramAvgPedestrianPerMinFromSouthToNorth'))
          inputParamAvgPedestrianPerMinFromSouthToNorth = $response.find('.Page_paramAvgPedestrianPerMinFromSouthToNorth');
        if(vars.includes('paramPedestrianDemandScalingFactor'))
          inputParamPedestrianDemandScalingFactor = $response.find('.Page_paramPedestrianDemandScalingFactor');
        if(vars.includes('paramMinGreenTimeSecWestEast'))
          inputParamMinGreenTimeSecWestEast = $response.find('.Page_paramMinGreenTimeSecWestEast');
        if(vars.includes('paramMaxGreenTimeSecWestEast'))
          inputParamMaxGreenTimeSecWestEast = $response.find('.Page_paramMaxGreenTimeSecWestEast');
        if(vars.includes('paramMinGreenTimeSecSouthNorth'))
          inputParamMinGreenTimeSecSouthNorth = $response.find('.Page_paramMinGreenTimeSecSouthNorth');
        if(vars.includes('paramMaxGreenTimeSecSouthNorth'))
          inputParamMaxGreenTimeSecSouthNorth = $response.find('.Page_paramMaxGreenTimeSecSouthNorth');
        if(vars.includes('paramPedestrianWaitThresholdSecNorthSouth'))
          inputParamPedestrianWaitThresholdSecNorthSouth = $response.find('.Page_paramPedestrianWaitThresholdSecNorthSouth');
        if(vars.includes('paramPedestrianWaitThresholdSecWestEast'))
          inputParamPedestrianWaitThresholdSecWestEast = $response.find('.Page_paramPedestrianWaitThresholdSecWestEast');
        if(vars.includes('paramVehicleQueueThresholdWestEast'))
          inputParamVehicleQueueThresholdWestEast = $response.find('.Page_paramVehicleQueueThresholdWestEast');
        if(vars.includes('paramVehicleQueueThresholdSouthNorth'))
          inputParamVehicleQueueThresholdSouthNorth = $response.find('.Page_paramVehicleQueueThresholdSouthNorth');
        if(vars.includes('paramPedestrianQueueThresholdNorthSouth'))
          inputParamPedestrianQueueThresholdNorthSouth = $response.find('.Page_paramPedestrianQueueThresholdNorthSouth');
        if(vars.includes('paramPedestrianQueueThresholdWestEast'))
          inputParamPedestrianQueueThresholdWestEast = $response.find('.Page_paramPedestrianQueueThresholdWestEast');
        if(vars.includes('paramRunTime'))
          inputParamRunTime = $response.find('.Page_paramRunTime');
        if(vars.includes('paramStepSize'))
          inputParamStepSize = $response.find('.Page_paramStepSize');
        if(vars.includes('paramItersPerPar'))
          inputParamItersPerPar = $response.find('.Page_paramItersPerPar');
        if(vars.includes('paramTotalIterNum'))
          inputParamTotalIterNum = $response.find('.Page_paramTotalIterNum');
        if(vars.includes('reportKeys'))
          inputReportKeys = $response.find('.Page_reportKeys');
        if(vars.includes('pk'))
          inputPk = $response.find('.Page_pk');
        if(vars.includes('inheritPk'))
          inputInheritPk = $response.find('.Page_inheritPk');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.find('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.find('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.find('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.find('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.find('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.find('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.find('.Page_objectTitle');
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
        if(vars.includes('entityShortId'))
          inputEntityShortId = $response.find('.Page_entityShortId');
        if(vars.includes('areaServedColors'))
          inputAreaServedColors = $response.find('.Page_areaServedColors');
        if(vars.includes('areaServedTitles'))
          inputAreaServedTitles = $response.find('.Page_areaServedTitles');
        if(vars.includes('areaServedLinks'))
          inputAreaServedLinks = $response.find('.Page_areaServedLinks');
        if(vars.includes('trafficFlowObservedIds'))
          inputTrafficFlowObservedIds = $response.find('.Page_trafficFlowObservedIds');
        if(vars.includes('paramDemandScale'))
          inputParamDemandScale = $response.find('.Page_paramDemandScale');
        jsWebsocketSmartTrafficLight(pk, vars, $response);

        window.smartTrafficLight = JSON.parse($response.find('.pageForm .smartTrafficLight').val());
        window.listSmartTrafficLight = JSON.parse($response.find('.pageForm .listSmartTrafficLight').val());


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

        if(inputLocation) {
          inputLocation.replaceAll('.Page_location');
          addGlow($('.Page_location'));
        }

        if(inputEntityId) {
          inputEntityId.replaceAll('.Page_entityId');
          addGlow($('.Page_entityId'));
        }

        if(inputSmartTrafficLightName) {
          inputSmartTrafficLightName.replaceAll('.Page_smartTrafficLightName');
          addGlow($('.Page_smartTrafficLightName'));
        }

        if(inputAreaServed) {
          inputAreaServed.replaceAll('.Page_areaServed');
          addGlow($('.Page_areaServed'));
        }

        if(inputRouteIds) {
          inputRouteIds.replaceAll('.Page_routeIds');
          addGlow($('.Page_routeIds'));
        }

        if(inputRouteIdNorth) {
          inputRouteIdNorth.replaceAll('.Page_routeIdNorth');
          addGlow($('.Page_routeIdNorth'));
        }

        if(inputRouteIdEast) {
          inputRouteIdEast.replaceAll('.Page_routeIdEast');
          addGlow($('.Page_routeIdEast'));
        }

        if(inputParamAvgVehiclePerMinFromWestToEast) {
          inputParamAvgVehiclePerMinFromWestToEast.replaceAll('.Page_paramAvgVehiclePerMinFromWestToEast');
          addGlow($('.Page_paramAvgVehiclePerMinFromWestToEast'));
        }

        if(inputParamAvgVehiclePerMinFromSouthToNorth) {
          inputParamAvgVehiclePerMinFromSouthToNorth.replaceAll('.Page_paramAvgVehiclePerMinFromSouthToNorth');
          addGlow($('.Page_paramAvgVehiclePerMinFromSouthToNorth'));
        }

        if(inputParamVehicleDemandScalingFactor) {
          inputParamVehicleDemandScalingFactor.replaceAll('.Page_paramVehicleDemandScalingFactor');
          addGlow($('.Page_paramVehicleDemandScalingFactor'));
        }

        if(inputParamAvgPedestrianPerMinFromWestToEast) {
          inputParamAvgPedestrianPerMinFromWestToEast.replaceAll('.Page_paramAvgPedestrianPerMinFromWestToEast');
          addGlow($('.Page_paramAvgPedestrianPerMinFromWestToEast'));
        }

        if(inputParamAvgPedestrianPerMinFromSouthToNorth) {
          inputParamAvgPedestrianPerMinFromSouthToNorth.replaceAll('.Page_paramAvgPedestrianPerMinFromSouthToNorth');
          addGlow($('.Page_paramAvgPedestrianPerMinFromSouthToNorth'));
        }

        if(inputParamPedestrianDemandScalingFactor) {
          inputParamPedestrianDemandScalingFactor.replaceAll('.Page_paramPedestrianDemandScalingFactor');
          addGlow($('.Page_paramPedestrianDemandScalingFactor'));
        }

        if(inputParamMinGreenTimeSecWestEast) {
          inputParamMinGreenTimeSecWestEast.replaceAll('.Page_paramMinGreenTimeSecWestEast');
          addGlow($('.Page_paramMinGreenTimeSecWestEast'));
        }

        if(inputParamMaxGreenTimeSecWestEast) {
          inputParamMaxGreenTimeSecWestEast.replaceAll('.Page_paramMaxGreenTimeSecWestEast');
          addGlow($('.Page_paramMaxGreenTimeSecWestEast'));
        }

        if(inputParamMinGreenTimeSecSouthNorth) {
          inputParamMinGreenTimeSecSouthNorth.replaceAll('.Page_paramMinGreenTimeSecSouthNorth');
          addGlow($('.Page_paramMinGreenTimeSecSouthNorth'));
        }

        if(inputParamMaxGreenTimeSecSouthNorth) {
          inputParamMaxGreenTimeSecSouthNorth.replaceAll('.Page_paramMaxGreenTimeSecSouthNorth');
          addGlow($('.Page_paramMaxGreenTimeSecSouthNorth'));
        }

        if(inputParamPedestrianWaitThresholdSecNorthSouth) {
          inputParamPedestrianWaitThresholdSecNorthSouth.replaceAll('.Page_paramPedestrianWaitThresholdSecNorthSouth');
          addGlow($('.Page_paramPedestrianWaitThresholdSecNorthSouth'));
        }

        if(inputParamPedestrianWaitThresholdSecWestEast) {
          inputParamPedestrianWaitThresholdSecWestEast.replaceAll('.Page_paramPedestrianWaitThresholdSecWestEast');
          addGlow($('.Page_paramPedestrianWaitThresholdSecWestEast'));
        }

        if(inputParamVehicleQueueThresholdWestEast) {
          inputParamVehicleQueueThresholdWestEast.replaceAll('.Page_paramVehicleQueueThresholdWestEast');
          addGlow($('.Page_paramVehicleQueueThresholdWestEast'));
        }

        if(inputParamVehicleQueueThresholdSouthNorth) {
          inputParamVehicleQueueThresholdSouthNorth.replaceAll('.Page_paramVehicleQueueThresholdSouthNorth');
          addGlow($('.Page_paramVehicleQueueThresholdSouthNorth'));
        }

        if(inputParamPedestrianQueueThresholdNorthSouth) {
          inputParamPedestrianQueueThresholdNorthSouth.replaceAll('.Page_paramPedestrianQueueThresholdNorthSouth');
          addGlow($('.Page_paramPedestrianQueueThresholdNorthSouth'));
        }

        if(inputParamPedestrianQueueThresholdWestEast) {
          inputParamPedestrianQueueThresholdWestEast.replaceAll('.Page_paramPedestrianQueueThresholdWestEast');
          addGlow($('.Page_paramPedestrianQueueThresholdWestEast'));
        }

        if(inputParamRunTime) {
          inputParamRunTime.replaceAll('.Page_paramRunTime');
          addGlow($('.Page_paramRunTime'));
        }

        if(inputParamStepSize) {
          inputParamStepSize.replaceAll('.Page_paramStepSize');
          addGlow($('.Page_paramStepSize'));
        }

        if(inputParamItersPerPar) {
          inputParamItersPerPar.replaceAll('.Page_paramItersPerPar');
          addGlow($('.Page_paramItersPerPar'));
        }

        if(inputParamTotalIterNum) {
          inputParamTotalIterNum.replaceAll('.Page_paramTotalIterNum');
          addGlow($('.Page_paramTotalIterNum'));
        }

        if(inputReportKeys) {
          inputReportKeys.replaceAll('.Page_reportKeys');
          addGlow($('.Page_reportKeys'));
        }

        if(inputPk) {
          inputPk.replaceAll('.Page_pk');
          addGlow($('.Page_pk'));
        }

        if(inputInheritPk) {
          inputInheritPk.replaceAll('.Page_inheritPk');
          addGlow($('.Page_inheritPk'));
        }

        if(inputClassCanonicalName) {
          inputClassCanonicalName.replaceAll('.Page_classCanonicalName');
          addGlow($('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          inputClassSimpleName.replaceAll('.Page_classSimpleName');
          addGlow($('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          inputClassCanonicalNames.replaceAll('.Page_classCanonicalNames');
          addGlow($('.Page_classCanonicalNames'));
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

        if(inputEntityShortId) {
          inputEntityShortId.replaceAll('.Page_entityShortId');
          addGlow($('.Page_entityShortId'));
        }

        if(inputAreaServedColors) {
          inputAreaServedColors.replaceAll('.Page_areaServedColors');
          addGlow($('.Page_areaServedColors'));
        }

        if(inputAreaServedTitles) {
          inputAreaServedTitles.replaceAll('.Page_areaServedTitles');
          addGlow($('.Page_areaServedTitles'));
        }

        if(inputAreaServedLinks) {
          inputAreaServedLinks.replaceAll('.Page_areaServedLinks');
          addGlow($('.Page_areaServedLinks'));
        }

        if(inputTrafficFlowObservedIds) {
          inputTrafficFlowObservedIds.replaceAll('.Page_trafficFlowObservedIds');
          addGlow($('.Page_trafficFlowObservedIds'));
        }

        if(inputParamDemandScale) {
          inputParamDemandScale.replaceAll('.Page_paramDemandScale');
          addGlow($('.Page_paramDemandScale'));
        }

        pageGraphSmartTrafficLight();
    });
  }
}

function pageGraphSmartTrafficLight(apiRequest) {
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
          layout['title'] = 'smart traffic lights';
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
        Plotly.react('htmBodyGraphBaseModelPage', data, layout);
      }
    }

    // Graph Location
    window.mapLayers = {};
    function onEachFeature(feature, layer) {
      let popupContent = htmTooltipSmartTrafficLight(feature, layer);
      layer.bindPopup(popupContent);
      window.mapLayers[feature.properties.id] = layer;
    };
    if(window.mapSmartTrafficLight) {
      window.geoJSONSmartTrafficLight.clearLayers();
      $.each( window.listSmartTrafficLight, function(index, smartTrafficLight) {
        if(smartTrafficLight.areaServed) {
          var shapes = [];
          if(Array.isArray(smartTrafficLight.areaServed))
            shapes = shapes.concat(smartTrafficLight.areaServed);
          else
            shapes.push(smartTrafficLight.areaServed);
          shapes.forEach(function(shape, index) {
            var features = [{
              "type": "Feature"
              , "properties": smartTrafficLight
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleSmartTrafficLight
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleSmartTrafficLight(feature));
              }
            });
            window.geoJSONSmartTrafficLight.addLayer(layer);
          });
        }
      });
    } else {
      window.mapSmartTrafficLight = L.map('htmBodyGraphLocationSmartTrafficLightPage', {closePopupOnClick: false});
      var data = [];
      var layout = {};
      layout['showlegend'] = true;
      layout['dragmode'] = 'zoom';
      layout['uirevision'] = 'true';
      var legend = L.control({position: 'bottomright'});
      legend.onAdd = jsLegendSmartTrafficLight;
      legend.addTo(window.mapSmartTrafficLight);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(window.mapSmartTrafficLight);

      if(window['DEFAULT_MAP_LOCATION'] && window['DEFAULT_MAP_ZOOM'])
        window.mapSmartTrafficLight.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']], window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_ZOOM'])
        window.mapSmartTrafficLight.setView(null, window['DEFAULT_MAP_ZOOM']);
      else if(window['DEFAULT_MAP_LOCATION'])
        window.mapSmartTrafficLight.setView([window['DEFAULT_MAP_LOCATION']['lat'], window['DEFAULT_MAP_LOCATION']['lon']]);

      layout['margin'] = { r: 0, t: 0, b: 0, l: 0 };
      window.geoJSONSmartTrafficLight = L.geoJSON().addTo(window.mapSmartTrafficLight);
      $.each( window.listSmartTrafficLight, function(index, smartTrafficLight) {
        if(smartTrafficLight.areaServed) {
          var shapes = [];
          if(Array.isArray(smartTrafficLight.areaServed))
            shapes = shapes.concat(smartTrafficLight.areaServed);
          else
            shapes.push(smartTrafficLight.areaServed);
          shapes.forEach(shape => {
            var features = [{
              "type": "Feature"
              , "properties": smartTrafficLight
              , "geometry": shape
              , "index": index
            }];
            var layer = L.geoJSON(features, {
              onEachFeature: onEachFeature
              , style: jsStyleSmartTrafficLight
              , pointToLayer: function(feature, latlng) {
                return L.circleMarker(latlng, jsStyleSmartTrafficLight(feature));
              }
            });
            window.geoJSONSmartTrafficLight.addLayer(layer);
          });
        }
      });
      window.mapSmartTrafficLight.on('popupopen', function(e) {
        var feature = e.popup._source.feature;
        jsTooltipSmartTrafficLight(e, feature);
      });
    }
  }
}

function animateStats() {
  $('#pageSearchVal-fqSmartTrafficLight_time').text('');
  searchPage('SmartTrafficLight', function() {
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
      $('#fqSmartTrafficLight_time').val(x);
      $('#fqSmartTrafficLight_time').change();
      searchPage('SmartTrafficLight');
    }, speedRate);
  });
}
