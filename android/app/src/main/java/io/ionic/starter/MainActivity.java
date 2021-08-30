package io.ionic.starter;
import android.os.Bundle;

import com.getcapacitor.Plugin;
import com.jaakrecog.fingerprint.FingerPrint;
import com.getcapacitor.BridgeActivity;
import com.jaakrecog.fingerprint.FingerPrintPlugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

@Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(FingerPrintPlugin.class);
  }
}
