import React from 'react';

function TrackingForm ({ submitHandler }) {
  return (
    <>
    <h1>React Tracking</h1>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <input type = "text" name = "tracking" className="form-control" required/>
          </div>
          <button type="submit" className="btn btn-primary">Localizar</button>
       </form>
       </>
  );
}

export default TrackingForm;