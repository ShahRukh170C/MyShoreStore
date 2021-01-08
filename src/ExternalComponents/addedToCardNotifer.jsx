import React from "react";
import { AlertList } from "react-bs-notifier";


export function NotifierGenerator({ slugs }) {
  const [position, setPosition] = React.useState("top-right");
  const [alerts, setAlerts] = React.useState([]);
  const [alertTimeout, setAlertTimeout] = React.useState(0);
  //message we want to dispay in card
  const [newMessage, setNewMessage] = React.useState(
    slugs
  );

  const generate = React.useCallback(
    (type) => {
      setAlerts((alerts) => [
        ...alerts,
        {
          id: new Date().getTime(),
          type: type,
          headline: `Whoa, ${type}!`,
          message: newMessage,
        },
      ]);
    },
    [newMessage]
  );

  const onDismissed = React.useCallback((alert) => {
    setAlerts((alerts) => {
      const idx = alerts.indexOf(alert);
      if (idx < 0) return alerts;
      return [...alerts.slice(0, idx), ...alerts.slice(idx + 1)];
    });
  }, []);

  const clearAlerts = React.useCallback(() => setAlerts([]), []);

  const onTimeoutChange = React.useCallback(
    ({ target: { value } }) => setAlertTimeout(+value * 1000),
    []
  );

  const onNewMessageChange = React.useCallback(
    ({ target: { value } }) => setNewMessage(value),
    []
  );

  const onPositionChange = React.useCallback(
    ({ target: { value } }) => setPosition(value),
    []
  );

  const clearAllButton = alerts.length ? (
    <button className="btn btn-link" onClick={clearAlerts}>
      Clear all alerts
    </button>
  ) : null;

  return (
    <>
      <AlertList
        position={position}
        alerts={alerts}
        timeout={alertTimeout}
        dismissTitle="Begone!"
        onDismiss={onDismissed}
      />

      <div className="form-group">
        <label htmlFor="new-message-control">Message</label>
        <textarea
          id="new-message-control"
          placeholder="Something happened, here are the deets"
          className="form-control"
          value={newMessage}
          onChange={onNewMessageChange}
        />
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="timeout-control" className="control-label">
            Auto-dismiss after
          </label>
          <div className="input-group">
            <input
              id="timeout-control"
              className="form-control"
              type="number"
              value={alertTimeout / 1000}
              onChange={onTimeoutChange}
            />
            <div className="input-group-append">
              <span className="input-group-text">seconds</span>
            </div>
          </div>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="position-control">Position</label>
          <select
            onChange={onPositionChange}
            className="form-control"
            id="position-control"
          >
            {["top-right", "top-left", "bottom-right", "bottom-left"].map(
              (p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              )
            )}
          </select>
        </div>
      </div>

      <div className="form-group text-right">
        {clearAllButton}
        <div className="btn-group">
          {["info", "success", "warning", "danger"].map((type) => (
            <button
              key={type}
              type="button"
              className={`btn btn-${type}`}
              onClick={() => generate(type)}
            >
              generate {type}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
