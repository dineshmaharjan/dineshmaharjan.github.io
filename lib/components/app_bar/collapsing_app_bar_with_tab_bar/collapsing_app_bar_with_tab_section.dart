import 'package:flutter/material.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar_with_tab_bar/collapsing_app_bar_with_tab_mobile.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar_with_tab_bar/collapsing_app_bar_with_tab_tablet.dart';
import 'package:flutter_components/components/app_bar/collapsing_app_bar_with_tab_bar/collapsing_app_bar_with_tab_web.dart';
import 'package:flutter_components/utils/responsive/responsive_util.dart';


class CollapsingAppBarWithTabSection extends StatelessWidget {
  const CollapsingAppBarWithTabSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const ResponsiveUtil(
      tabletWidget: CollapsingAppBarWithTabTablet(),
      mobileWidget: CollapsingAppBarWithTabMobile(),
      webWidget: CollapsingAppBarWithTabWeb(),
    );
  }
}
