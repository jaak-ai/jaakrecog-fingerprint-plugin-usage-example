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

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(FingerPrintPlugin.class);

    }});
  }
}
