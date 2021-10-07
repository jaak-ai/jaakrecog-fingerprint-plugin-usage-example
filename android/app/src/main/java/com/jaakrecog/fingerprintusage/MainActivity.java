package com.jaakrecog.fingerprintusage;

import android.os.Bundle;
import android.util.Log;

import com.getcapacitor.BridgeActivity;
import com.jaakrecog.fingerprint.FingerPrintPlugin;

import io.sentry.capacitor.SentryCapacitor;


public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    try {
      registerPlugin(SentryCapacitor.class);
      registerPlugin(FingerPrintPlugin.class);

    } catch (Exception ex) {
      Log.e("Plugin exception", ex.getMessage());
    }
  }
}
