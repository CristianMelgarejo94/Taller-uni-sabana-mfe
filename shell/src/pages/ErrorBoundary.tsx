import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorMessage = () => <div>Estamos presentando fallas en nuestros servicios</div>;

export class ErrorBoundary extends Component<Props> {
  state: { hasError: boolean } = { hasError: false };

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: React.ErrorInfo) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error capturado en el ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}