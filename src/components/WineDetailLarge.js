'use strict';

var React = require('react/addons');
var Reflux = require('Reflux');

//var Actions = require('actions/xxx')

require('styles/WineDetailLarge.sass');

var WINE = {wineId: 1, name: 'Hawkhurst Estate Malbec', year: 2009, image: require('../images/winebottlesample.jpg'), review: {rating: 5, text: 'Moderately deep garnet-red colour, lighter on rim with some bricking. The bouquet is softly full and harmoniously integrated with savoury, secondary red berry fruit aromas melded with layers of dried herbs, earth, mushrooms and soft, brown spice elements. Medium-full bodied, the palate is smoothly integrated with a seamlessly interwoven array of complex secondary flavours. Soft red berry fruits form a sweet and rich core, and unfold layers of earth, undergrowth, spices and cedar. The mouthfeel is guided by fine, grainy, growing tannin extraction supporting the fruit, with lacy acidity lending a liveliness and tension that carries the wine to a soft, dry-textured finish with game, dried herb and cedary detail. This is a harmonious Pinot Noir showing smooth secondary development with some underlying grip and liveliness. Match with casseroles and slow-cooked game meat dishes over the next 4 years. Hand-picked fruit from Bendigo and Lowburn, given a cold soak and indigenous yeast fermented to 14.0% alc., the wine aged 11 months in 22% new French oak barriques'}};

var WineDetailLarge = React.createClass({
  mixins: [Reflux.ListenerMixin],
  getInitialState: function() {
    return {
      wineId: 1,
      name: '',
      year: null,
      image: '',
      review: {
        rating: null,
        text: ''
      }
    };
  },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {
    // make ajax request for wine
    // ajax: this.props.wine.wineId
    if(this.isMounted()) {
      this.setState(WINE);
    }
  },
  /*
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},
  */

  render: function () {
    return (
        <div className="WineDetailLarge row">
          <img src={this.state.image} />
          <div className="content">
            <h2>{this.state.name} <small>{this.state.year}</small></h2>
            <p>rating: {this.state.review.rating}</p>
            <p>{this.state.review.text}</p>
            <div>Bottom Bar</div>
          </div>
        </div>
      );
  }
});

module.exports = WineDetailLarge;
