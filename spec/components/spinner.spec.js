/* eslint-disable no-unused-expressions */
import $ from 'jquery';
import emitter from 'js/emitter';
import { Spinner } from 'components/spinner';

describe('Spinner component', () => {
  let instance;
  let sandbox;

  // 1 - Setup
  //    global scope
  //    before each describe->it
  beforeEach(() => {
    instance = new Spinner($('<div />'));
    sandbox = sinon.sandbox.create();
  });

  // 4 - Teardown
  //    after each describe->it
  afterEach(() => {
    sandbox.restore();
  });

  describe('#init', () => {
    it('calls #bindListeners', () => {
      // setup local scope
      const stub = sandbox.stub(instance, 'bindListeners');

      // 2 - Exercise
      instance.init();

      // 3 - Verify
      expect(stub.calledOnce).to.be.true;
    });
  });

  describe('#bindListeners', () => {
    context('when spinner:show event is triggered', () => {
      it('calls #onSpinnerShow', () => {
        // setup local
        const stub = sandbox.stub(instance, 'onSpinnerShow');

        // 2 - Exercise
        instance.bindListeners();
        emitter.emit('spinner:show');

        // 3 = Verify
        expect(stub.calledOnce).to.be.true;
      });
    });
  });

  describe('#bindListeners', () => {
    context('when spinner:hide event is triggered', () => {
      it('calls #onSpinnerHide', () => {
        // setup local
        const stub = sandbox.stub(instance, 'onSpinnerHide');

        // 2 - Exercise
        instance.bindListeners();
        emitter.emit('spinner:hide');

        // 3 = Verify
        expect(stub.calledOnce).to.be.true;
      });
    });
  });
});
