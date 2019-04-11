import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Counter from './counter';
import Clock from './clock';

function Page(props) {
  const { error, linkTo, NavigateTo, placeholderData, title } = props;
  let lastUpdate;
  let light;
  // if (props && props.counter) {
  //   lastUpdate = props.counter.lastUpdate;
  //   light = props.counter.light;
  // }

  return (
    <div>
      <h1>{title}</h1>
      {lastUpdate && light && <Clock lastUpdate={lastUpdate} light={light} />}
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
}

Page.propTypes = {
  error: PropTypes.object,
  linkTo: PropTypes.string,
  NavigateTo: PropTypes.string,
  placeholderData: PropTypes.string,
  title: PropTypes.string
};

export default connect(state => state)(Page);
