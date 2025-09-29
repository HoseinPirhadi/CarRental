package com.carrental

import android.os.Bundle
import android.os.Build
import android.view.View
import android.view.Window
import android.graphics.Color
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "CarRental"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

    fun setNavigationBarColor(colorHex: String, lightButtons: Boolean) {
        runOnUiThread {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                val window: Window = window
                window.navigationBarColor = Color.parseColor(colorHex)

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    var flags = window.decorView.systemUiVisibility
                    flags = if (lightButtons) {
                        flags and View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR.inv()
                    } else {
                        flags or View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR
                    }
                    window.decorView.systemUiVisibility = flags
                }
            }
        }
    }
}
