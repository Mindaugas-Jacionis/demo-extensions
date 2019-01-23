import actions from '../actions';

const resolveAction = fullName => {
  if (typeof fullName !== 'string') {
    throw new Error('Action parameter must be a string');
  }

  const action = fullName.split('.').slice(-1)[0];
  const module = actions[fullName.replace(`.${action}`, '')];

  if (!module || !module[action]) {
    throw new Error(`No action named: ${action} for ${module}`);
  }

  return module[action];
};

export default resolveAction;
