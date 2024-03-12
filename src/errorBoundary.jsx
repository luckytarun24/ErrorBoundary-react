import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }
  static getDerivedStateFromError(error) {
    console.log('==============error===============', error);
    return { isError: true };
  }
  componentDidCatch(error, info) {
    console.log('==============error===============', error);
    console.log('==============info===============', info);
  }
  render() {
    return this.state.isError ? (
      <>
        {this.props.fallback}
        <button
          onClick={() => {
            this.setState({ isError: false });
          }}
        >
          Unset Error
        </button>
      </>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
