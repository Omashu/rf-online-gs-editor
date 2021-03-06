/**
 *
 * ProjectSkillForceInteractingUsableRaceBM
 *
 */

import { Checkbox } from 'semantic-ui-react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import { getUsableRaceBM } from '~/containers/App/getters/projectSkillForce';
import ProjectSkillForceFieldFormattedMessage from '../FieldFormattedMessage';

/* eslint-disable react/prefer-stateless-function */
class ProjectSkillForceInteractingUsableRaceBM extends React.PureComponent {
  constructor(props) {
    super(props);

    this.renderCheckbox = this.renderCheckbox.bind(this);
    this.changeValue = (evt, owns) => {
      const { onChangeValue, skillForce } = this.props;
      onChangeValue(skillForce, owns.checked);
    };
  }

  renderCheckbox(message) {
    const { skillForce, skillForceNextValues, className } = this.props;

    const value = getUsableRaceBM(skillForceNextValues.get('nextValue'), {
      entry: skillForce,
    });

    return (
      <Checkbox
        label={message}
        value={1}
        checked={!!value}
        onChange={this.changeValue}
        className={className}
      />
    );
  }

  render() {
    return (
      <ProjectSkillForceFieldFormattedMessage message="UsableRaceBM">
        {this.renderCheckbox}
      </ProjectSkillForceFieldFormattedMessage>
    );
  }
}

ProjectSkillForceInteractingUsableRaceBM.propTypes = {
  skillForce: PropTypes.instanceOf(Map).isRequired,
  skillForceNextValues: PropTypes.instanceOf(Map).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  className: PropTypes.string,
};

ProjectSkillForceInteractingUsableRaceBM.defaultProps = {
  className: '',
};

export default ProjectSkillForceInteractingUsableRaceBM;
