import 'package:flutter/material.dart';
import 'package:flutter_components/components/bottomNav/bottom_nav_mobile.dart';
import 'package:flutter_components/components/bottomNav/bottom_nav_tablet.dart';
import 'package:flutter_components/utils/responsive/responsive_util.dart';

import 'bottom_nav_web.dart';


class BottomNavSection extends StatelessWidget {
  const BottomNavSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ResponsiveUtil(
      tabletWidget: BottomNavTablet(),
      mobileWidget: BottomNavMobile(),
      webWidget: BottomNavWeb(),
    );
  }
}
