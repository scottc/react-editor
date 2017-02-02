import React, { Component } from 'react';
import TestComponent from './TestComponent';


class App extends Component {
  render() {
    return (
	<div>
	      <ReactComponentForm type={TestComponent} initalProps={{}} onChange={console.log} onSubmit={console.log} />
	</div>
    );
  }
}

export default App;




export class ReactComponentForm extends Component {
  render() {

	const renderPropType = function(prop, propType, defaultValue){

console.log(prop, propType, defaultValue)

		const propTypeNameToString = function(propType){

			switch(propType){ // TODO: find a better solution
				case React.PropTypes.array:
					return 'array';

				case React.PropTypes.bool:
					return 'bool';

				case React.PropTypes.func:
					return 'func';

				case React.PropTypes.number:
					return 'number';

				case React.PropTypes.object:
					return 'object';

				case React.PropTypes.string:
					return 'string';

				case React.PropTypes.symbol:
					return 'symbol';

				case React.PropTypes.node:
					return 'node';

				case React.PropTypes.element:
					return 'element';

				case React.PropTypes.instanceOf:
					return 'instanceOf(...)';

				case React.PropTypes.oneOf:
					return 'oneOf(...)';

				case React.PropTypes.oneOfType:
					return 'oneOfType(...)';

				case React.PropTypes.arrayOf:
					return 'arrayOf(...)';

				case React.PropTypes.objectOf:
					return 'objectOf(...)';

				case React.PropTypes.shape:
					return 'shape(...)';

				case React.PropTypes.any:
					return 'any';

				default:
					return `${typeof propType} ${propType.name}`;
			}
		}

		const propTypeString = propTypeNameToString(propType)

	    return (
		<div key={prop}>
			<label>{prop} ({propTypeString} {propType.isRequired ? 'Required' : 'Optional'})</label><br/>
			<input name={prop} type={propTypeString} defaultValue={defaultValue} required={propType.isRequired ? 'required' : null} />
		</div>
	    );
	}

	console.log(this.props.type.propTypes)
	console.log(this.props.type.defaultProps)

	const keys = [ ...new Set([...Object.keys(this.props.type.propTypes), ...Object.keys(this.props.type.defaultProps)]) ]

	const propTypeFields = keys.map((a,b) => renderPropType(a, this.props.type.propTypes[a], this.props.type.defaultProps[a]))

    return (
      <div>
	<h1>{this.props.type.displayName}</h1>
	<input type="hidden" name="type" value={this.props.type.name} />
	{propTypeFields}
      </div>
    );
  }
}
