import TimeEntryList from './TimeEntryList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  fetching: state.timeEntry.fetching,
  entries: state.timeEntry.entries,
});

export default connect(mapStateToProps)(TimeEntryList);
