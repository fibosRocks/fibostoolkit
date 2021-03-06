import Fibos from 'fibos.js';
import { put, call } from 'redux-saga/effects';
import { fetchTokens, fetchIdentity } from './fetchers';
import { enableReader, enableWriter, disableWriter } from '../actions';

/*
*
* BUILD READER
* Create reader and fetch tokens
*
*/

// this is triggered by the buildDispatcher
export function* buildReader(activeNetwork) {
  try {
    const networkOptions = {
      broadcast: false,
      sign: false,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'FO',
      httpEndpoint: `${activeNetwork.endpoint.protocol}://${activeNetwork.endpoint.url}:${activeNetwork.endpoint.port}`,
    };

    const networkReader = yield Fibos(networkOptions);
    const tokens = yield call(fetchTokens, networkReader);

    yield put(enableReader(networkReader, tokens));
  } catch (err) {
    console.error('An FOToolkit error occured - see details below:');
    console.error(err);
  }
}

/*
*
* BUILD WRITER
* Create writer and fetch identity
*
*/

// this is triggered by the buildDispatcher
export function* buildWriter(signer, activeNetwork) {
  try {
    const signerClientConfig = {
      protocol: activeNetwork.endpoint.protocol,
      blockchain: activeNetwork.network.network,
      host: activeNetwork.endpoint.url,
      port: activeNetwork.endpoint.port,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'FO'
    };

    const networkOptions = {
      broadcast: true,
      sign: true,
      chainId: activeNetwork.network.chainId,
      keyPrefix: activeNetwork.network.prefix || 'FO'
    };
    const protocol = activeNetwork.endpoint.protocol;
    const networkWriter = signer.fibos(signerClientConfig, Fibos, networkOptions, protocol);
    const identity = yield call(fetchIdentity, signer, activeNetwork);

    if (identity) {
      yield put(enableWriter(networkWriter, identity));
    } else {
      yield put(disableWriter());
    }
  } catch (err) {
    console.error('An FOToolkit error occured - see details below:');
    console.error(err);
  }
}
