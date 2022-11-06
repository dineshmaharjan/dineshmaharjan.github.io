import 'package:flutter/material.dart';
import 'package:flutter_components/utils/responsive/screen_utils.dart';

class ResponsiveUtil extends StatelessWidget {
  const ResponsiveUtil(
      {Key? key, required this.webWidget,  required this.tabletWidget, required this.mobileWidget})
      : super(key: key);

  final Widget webWidget;
  final Widget tabletWidget;
  final Widget mobileWidget;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context,constraints){
        if(ScreenUtils.isMobile(context)){
          return  mobileWidget;
        }else if(ScreenUtils.isTablet(context)){
          return tabletWidget;
        }else{
          return webWidget;
        }

      },
    );
  }
}
