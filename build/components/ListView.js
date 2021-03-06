var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _ScrollResponder=require('../mixins/ScrollResponder');var _ScrollResponder2=_interopRequireDefault(_ScrollResponder);
var _reactTimerMixin=require('react-timer-mixin');var _reactTimerMixin2=_interopRequireDefault(_reactTimerMixin);
var _ScrollView=require('./ScrollView');var _ScrollView2=_interopRequireDefault(_ScrollView);
var _ListViewDataSource=require('../api/ListViewDataSource');var _ListViewDataSource2=_interopRequireDefault(_ListViewDataSource);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var SCROLLVIEW_REF='listviewscroll';var


ListView=function(_React$Component){_inherits(ListView,_React$Component);function ListView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,ListView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=ListView.__proto__||Object.getPrototypeOf(ListView)).call.apply(_ref,[this].concat(args))),_this),_this.
propTypes=_extends({},
_ScrollView2['default'].propTypes,{

dataSource:_propTypes2['default'].instanceOf(_ListViewDataSource2['default']).isRequired,
/**
     * (sectionID, rowID, adjacentRowHighlighted) => renderable
     *
     * If provided, a renderable component to be rendered as the separator
     * below each row but not the last row if there is a section header below.
     * Take a sectionID and rowID of the row above and whether its adjacent row
     * is highlighted.
     */
renderSeparator:_propTypes2['default'].func,
/**
     * (rowData, sectionID, rowID, highlightRow) => renderable
     *
     * Takes a data entry from the data source and its ids and should return
     * a renderable component to be rendered as the row.  By default the data
     * is exactly what was put into the data source, but it's also possible to
     * provide custom extractors. ListView can be notified when a row is
     * being highlighted by calling highlightRow function. The separators above and
     * below will be hidden when a row is highlighted. The highlighted state of
     * a row can be reset by calling highlightRow(null).
     */
renderRow:_propTypes2['default'].func.isRequired,
/**
     * How many rows to render on initial component mount.  Use this to make
     * it so that the first screen worth of data appears at one time instead of
     * over the course of multiple frames.
     */
initialListSize:_propTypes2['default'].number,
/**
     * Called when all rows have been rendered and the list has been scrolled
     * to within onEndReachedThreshold of the bottom.  The native scroll
     * event is provided.
     */
onEndReached:_propTypes2['default'].func,
/**
     * Threshold in pixels for onEndReached.
     */
onEndReachedThreshold:_propTypes2['default'].number,
/**
     * Number of rows to render per event loop.
     */
pageSize:_propTypes2['default'].number,
/**
     * () => renderable
     *
     * The header and footer are always rendered (if these props are provided)
     * on every render pass.  If they are expensive to re-render, wrap them
     * in StaticContainer or other mechanism as appropriate.  Footer is always
     * at the bottom of the list, and header at the top, on every render pass.
     */
renderFooter:_propTypes2['default'].func,
renderHeader:_propTypes2['default'].func,
/**
     * (sectionData, sectionID) => renderable
     *
     * If provided, a sticky header is rendered for this section.  The sticky
     * behavior means that it will scroll with the content at the top of the
     * section until it reaches the top of the screen, at which point it will
     * stick to the top until it is pushed off the screen by the next section
     * header.
     */
renderSectionHeader:_propTypes2['default'].func,
/**
     * (props) => renderable
     *
     * A function that returns the scrollable component in which the list rows
     * are rendered. Defaults to returning a ScrollView with the given props.
     */
renderScrollComponent:_propTypes2['default'].func.isRequired,
/**
     * How early to start rendering rows before they come on screen, in
     * pixels.
     */
scrollRenderAheadDistance:_propTypes2['default'].number,
/**
     * (visibleRows, changedRows) => void
     *
     * Called when the set of visible rows changes.  `visibleRows` maps
     * { sectionID: { rowID: true }} for all the visible rows, and
     * `changedRows` maps { sectionID: { rowID: true | false }} for the rows
     * that have changed their visibility, with true indicating visible, and
     * false indicating the view has moved out of view.
     */
onChangeVisibleRows:_propTypes2['default'].func,
/**
     * A performance optimization for improving scroll perf of
     * large lists, used in conjunction with overflow: 'hidden' on the row
     * containers.  This is enabled by default.
     */
removeClippedSubviews:_propTypes2['default'].bool,
/**
     * An array of child indices determining which children get docked to the
     * top of the screen when scrolling. For example, passing
     * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
     * top of the scroll view. This property is not supported in conjunction
     * with `horizontal={true}`.
     * @platform ios
     */
stickyHeaderIndices:_propTypes2['default'].arrayOf(_propTypes2['default'].number)}),_this.


mixins=[_ScrollResponder2['default'].Mixin,_reactTimerMixin2['default']],_this.

statics={
DataSource:_ListViewDataSource2['default']


/**
   * Exports some data, e.g. for perf investigations or analytics.
   */},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(ListView,[{key:'getMetrics',value:function(){function getMetrics()
{// eslint-disable-line react/sort-comp
// It's fixed, but the linter doesnt want to recognise it...
return{
contentLength:this.scrollProperties.contentLength,
totalRows:this.props.dataSource.getRowCount(),
renderedRows:this.state.curRenderedRowsCount,
visibleRows:Object.keys(this._visibleRows).length};

}return getMetrics;}()},{key:'scrollTo',value:function(){function scrollTo(

destY,destX){
this.getScrollResponder().scrollResponderScrollTo(destX||0,destY||0);
}return scrollTo;}()

/**
   * Provides a handle to the underlying scroll responder to support operations
   * such as scrollTo.
   */},{key:'getScrollResponder',value:function(){function getScrollResponder()
{
return this.refs[SCROLLVIEW_REF]&&
this.refs[SCROLLVIEW_REF].getScrollResponder&&
this.refs[SCROLLVIEW_REF].getScrollResponder();
}return getScrollResponder;}()},{key:'setNativeProps',value:function(){function setNativeProps(

props){
this.refs[SCROLLVIEW_REF].setNativeProps(props);
}return setNativeProps;}()},{key:'getDefaultProps',value:function(){function getDefaultProps()

{
return{
renderScrollComponent:function(){function renderScrollComponent(props){return _react2['default'].createElement(_ScrollView2['default'],props);}return renderScrollComponent;}()};

}return getDefaultProps;}()},{key:'getInnerViewNode',value:function(){function getInnerViewNode()

{
return this.refs[SCROLLVIEW_REF].getInnerViewNode();
}return getInnerViewNode;}()},{key:'render',value:function(){function render()

{
return null;
}return render;}()}]);return ListView;}(_react2['default'].Component);


module.exports=ListView;